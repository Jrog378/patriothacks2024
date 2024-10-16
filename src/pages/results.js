import TopNavbar from "../components/navbar";
import {Col, Container, Image, Row} from "react-bootstrap";

export default function Results() {
    return (
        <>
            <TopNavbar/>
            <Container>
                <h1 style={{textAlign: 'center', padding: '10px', fontWeight: 'bold'}}>
                    Our Results
                </h1>
                <Row>
                    <Col xs={12} lg={6} style={{padding:'10px'}}>
                        <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px'}}>
                            <Container style={{padding: '5%'}}>
                                <h2>
                                    AWS Rekognition Results
                                </h2>
                                <p>
                                    AWS Rekognition was an amazing resource for our group to quickly build, train, and
                                    test
                                    our
                                    models, especially with the help of AWS staff on site and the SageMaker Classic IDE
                                    with
                                    it's built in tutorials. Our first model was able to obtain a <strong>F1 score of
                                    0.933,
                                    an
                                    Average Precision of 1.0(100% Accuracy), and an Overall Recall of 0.9</strong> in
                                    our
                                    initial testing. Our second test obtained <strong>scores of all
                                    1.0s(100%)</strong> across
                                    the board. Finally, our third test performed very poorly in comparison with an F1
                                    score
                                    of
                                    0.11, an Average Precision of 0.07 and an Overall Recall of 0.3. Since we were
                                    having
                                    trouble with this last model, we decided to supplement with some hard code as well.
                                </p>
                            </Container>
                        </Container>
                    </Col>
                    <Col xs={12} lg={6} style={{padding:'10px'}}>
                        <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px'}}>
                            <Container style={{padding: '5%'}}>
                                <h2>
                                    Hard Coded Results
                                </h2>
                                <p>
                                    We attempted to hard code the third model in both Python and Java. Our Python Model
                                    was
                                    able
                                    to obtain an <strong>accuracy of around 80% with 15 True Positives, 10 True
                                    Negatives, 0
                                    False
                                    Positives, and 6 False Negatives</strong>. We are relatively happy with these
                                    results
                                    because rather
                                    than catching the wrong car in our model and wasting resources to look into those
                                    photos, it
                                    would be more efficient to just skip over some that could potentially be suspects.
                                </p>
                            </Container>
                        </Container>
                    </Col>
                </Row>
                <Container style={{textAlign: 'center'}}>
                    <h2>
                        AWS Rekognition Photos
                    </h2>
                    <Row>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Model1.png'}/>
                            </Container>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Model2.png'}/>
                            </Container>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Model3.png'}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container style={{textAlign: 'center'}}>
                    <h2>
                        Python OpenCV Photos
                    </h2>
                    <Row>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Python1.png'}/>
                            </Container>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Python2.png'}/>
                            </Container>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Container style={{paddingBottom: '10%'}}>
                                <Image style={{maxWidth: '80%'}} src={'Python3.png'}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}