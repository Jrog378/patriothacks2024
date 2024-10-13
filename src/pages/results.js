import TopNavbar from "../components/navbar";
import {Col, Container, Row} from "react-bootstrap";

export default function Results() {
    return (
        <>
            <TopNavbar/>
            <Container>
                <h1 style={{textAlign: 'center', padding: '10px', fontWeight: 'bold'}}>
                    Results
                </h1>
                <Row>
                    <Col>
                        <h2>
                            AWS Rekognition Results
                        </h2>
                        <p>
                            AWS Rekognition was an amazing resource for our group to quickly build, train, and test our
                            models, especially with the help of AWS staff on site and the SageMaker Classic IDE with
                            it's built in tutorials. Our first model was able to obtain a F1 score of 0.933, a Average
                            Precision of 1.0, and an Overall Recall of 0.9. Our second test obtained scores of 1.0s all
                            across the board. Finally, our third test performed very poorly in comparison with an F1
                            score of 0.11, an Average Precision of 0.07 and an Overall Recall of 0.3. Since we were
                            having trouble with this last model, we decided to supplement with some hard code as well.
                        </p>
                    </Col>
                    <Col>
                        <h2>
                            Hard Coded Results
                        </h2>
                        <p>
                            We attempted to hard code the third model in both Python and Java. Our Python Model was able
                            to obtain an accuracy of around 80% with 15 True Positives, 10 True Negatives, 0 False
                            Positives, and 6 False Negatives. We are relatively happy with these results because rather
                            than catching the wrong car in our model and wasting resources to look into those photos, it
                            would be more efficient to just skip over some that could potentially be suspects.
                        </p>
                    </Col>
                </Row>
                <Container style={{textAlign: 'center'}}>
                    <h2>
                        Photos
                    </h2>
                    <p>
                        (Insert Proof Photos)
                    </p>
                </Container>
            </Container>
        </>
    )
}