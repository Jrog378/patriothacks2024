# import the necessary packages
import cv2

image = cv2.imread('3_challenge_eval/frame_18016.png')
template = cv2.imread('larger_license_crop.png')

# convert both the image and template to grayscale
imageGray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
templateGray = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
cv2.imshow("Image", imageGray)
cv2.imshow("Template", templateGray)
# tempedges = cv2.Canny(templateGray, 50, 50)
# tempimage = cv2.Canny(imageGray, 50, 50)
# cv2.imshow("Template", tempedges)
# cv2.imshow("Template", tempimage)



# perform template matching
print("[INFO] performing template matching...")
result = cv2.matchTemplate(templateGray, imageGray, cv2.TM_CCORR_NORMED)
print(cv2.minMaxLoc(result))

(minVal, maxVal, minLoc, maxLoc) = cv2.minMaxLoc(result)
# determine the starting and ending (x, y)-coordinates of the
# bounding box
(startX, startY) = maxLoc
endX = startX + template.shape[1]
endY = startY + template.shape[0]

# draw the bounding box on the image
if maxVal > .9:
    print('some')
    cv2.rectangle(image, (startX, startY), (endX, endY), (255, 0, 0), 3)
else:
    print('none')
# show the output image
cv2.imshow("Output", image)
cv2.waitKey(0)
