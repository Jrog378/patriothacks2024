'''

Connect to custom rek endpoint and submit images

collect results and write to disk

Evaluate predictions against labels


'''

'''
Constants to change

'''
eval_image_dir = "3_challenge_eval"
eval_annotation_file = "testing_manifest_with_validation.json"
tmp_s3_bucket = "challenge3bucket"  # this bucket needs to exist
rek_endpoint_uri = "arn:aws:rekognition:us-east-1:301442466082:project/Challenge3/version/Challenge3.2024-10-12T18.44.19/1728773059623"

'''
end constants
'''

# other constants
iou_threshold = .5
confidence_threshold = 0.

import boto3
from os import listdir
from os.path import isfile, join
import uuid
import json


def get_iou(bb1, bb2):
    """
    Calculate the Intersection over Union (IoU) of two bounding boxes.

    Parameters
    ----------
    bb1 : dict
        Keys: {'x1', 'x2', 'y1', 'y2'}
        The (x1, y1) position is at the top left corner,
        the (x2, y2) position is at the bottom right corner
    bb2 : dict
        Keys: {'x1', 'x2', 'y1', 'y2'}
        The (x, y) position is at the top left corner,
        the (x2, y2) position is at the bottom right corner

    Returns
    -------
    float
        in [0, 1]
    """
    assert bb1['x1'] < bb1['x2']
    assert bb1['y1'] < bb1['y2']
    assert bb2['x1'] < bb2['x2']
    assert bb2['y1'] < bb2['y2']

    # determine the coordinates of the intersection rectangle
    x_left = max(bb1['x1'], bb2['x1'])
    y_top = max(bb1['y1'], bb2['y1'])
    x_right = min(bb1['x2'], bb2['x2'])
    y_bottom = min(bb1['y2'], bb2['y2'])

    if x_right < x_left or y_bottom < y_top:
        return 0.0

    # The intersection of two axis-aligned bounding boxes is always an
    # axis-aligned bounding box
    intersection_area = (x_right - x_left) * (y_bottom - y_top)

    # compute the area of both AABBs
    bb1_area = (bb1['x2'] - bb1['x1']) * (bb1['y2'] - bb1['y1'])
    bb2_area = (bb2['x2'] - bb2['x1']) * (bb2['y2'] - bb2['y1'])

    # compute the intersection over union by taking the intersection
    # area and dividing it by the sum of prediction + ground-truth
    # areas - the interesection area
    iou = intersection_area / float(bb1_area + bb2_area - intersection_area)
    assert iou >= 0.0
    assert iou <= 1.0
    return iou


def compare_detect(one_detect, many_detects):
    tps = 0
    fps = 0
    fns = 0
    bbox1 = {"x1": one_detect["left"], "x2": one_detect["left"] + one_detect["width"],
             "y1": one_detect["top"], "y2": one_detect["top"] + one_detect["height"]}
    class1 = one_detect["classname"]
    found = False
    # only looking for one
    for detect in many_detects:
        bbox2 = {"x1": detect["left"], "x2": detect["left"] + detect["width"],
                 "y1": detect["top"], "y2": detect["top"] + detect["height"]}
        iou = get_iou(bbox1, bbox2)
        class2 = detect["classname"]
        if iou >= iou_threshold and not found and class1 == class2:
            tps += 1
            found = True
        else:
            fps += 1
    if not found:
        fns += 1

    return tps, fps, fns


def reformat_rescale(annotations, height, width):
    targets = []
    for a in annotations:
        g = a["Geometry"]["BoundingBox"]
        target = {
            "classname": a["Name"],
            "top": int(g["Top"] * height),
            "left": int(g["Left"] * width),
            "height": int(g["Height"] * height),
            "width": int(g["Width"] * width)
        }
        targets.append(target)

    return targets


client = boto3.client('rekognition')

# load images
# need to load these from the annotation file
ground_truth = json.load(open(eval_annotation_file, 'r'))

# send each file and get results
total_tps = 0
total_fps = 0
total_fns = 0

results = []
print(f"running inference on {len(ground_truth)} positive images")
for record in ground_truth:
    f = join(eval_image_dir, record["source-ref"].split("/")[-1])
    with open(f, 'rb') as image:
        # transfer to s3
        unique_name = str(uuid.uuid4()) + ".png"
        s3 = boto3.client('s3')
        s3.put_object(Body=image.read(), Bucket=tmp_s3_bucket, Key=unique_name)

        # run inference
        response = client.detect_custom_labels(
            ProjectVersionArn=rek_endpoint_uri,
            Image={"S3Object": {
                "Bucket": tmp_s3_bucket,
                "Name": unique_name
            }}
        )
        # print(response)

    # reformat the response to my format
    # convert relative bounding box to absolute pixel values
    annotations = response["CustomLabels"]
    try:
        annotations = reformat_rescale(annotations,
                                       record["Challenge3-train_BB"]["annotations"]["height"],
                                       record["Challenge3-train_BB"]["annotations"]["width"])
    except:
        continue

    # evaluate the responses
    tps, fps, fns = compare_detect(record["annotations"][0], annotations)  # we know we only have 1 per image
    total_tps += tps
    total_fps += fps
    total_fns += fns

# load negative examples
positive_images = set(record["source-ref"].split("/")[-1] for record in ground_truth)
neg_images = [join(eval_image_dir, f) for f in listdir(eval_image_dir) if
              isfile(join(eval_image_dir, f)) and f not in positive_images and f.endswith(".png")]

print(f"running inference on {len(neg_images)} negative images")
for img_file in neg_images:
    with open(img_file, 'rb') as image:
        # transfer to s3
        unique_name = str(uuid.uuid4()) + ".png"
        s3 = boto3.client('s3')
        s3.put_object(Body=image.read(), Bucket=tmp_s3_bucket, Key=unique_name)

        # run inference
        response = client.detect_custom_labels(
            ProjectVersionArn=rek_endpoint_uri,
            Image={"S3Object": {
                "Bucket": tmp_s3_bucket,
                "Name": unique_name
            }}
        )
    annotations = response["CustomLabels"]
    total_fps += len(annotations)

# print metrics

precision = total_tps / (total_tps + total_fps) if (total_tps + total_fns) > 0 else 0.
recall = total_tps / (total_tps + total_fns) if (total_tps + total_fns) > 0 else 0.
f1 = 2 * ((precision * recall) / (precision + recall)) if (precision + recall) > 0 else 0.
print("----------------------")
print(f"true pos:  {total_tps}")
print(f"false pos: {total_fps}")
print(f"false neg:  {total_fns}")
print("----------------------")
print(f"precision: {precision}")
print(f"recall:    {recall}")
print(f"F1:        {f1}")
