import TopNavbar from "../components/navbar";
import {Col, Container, Row} from "react-bootstrap";

export default function Procedure() {
    return (
        <>
            <TopNavbar/>
            <Container>
                <h1 style={{textAlign: 'center', padding: '10px', fontWeight: 'bold'}}>
                    Procedures
                </h1>
                <Row>
                    <Col>
                        <h2>
                            AWS Rekognition & More
                        </h2>
                        <p>
                            In our project we primarily used AWS Recognition to analyze our photos and work with our
                            Machine Learning models. On top of AWS, we used assistance form programming languages like
                            Python and Java when the problems got more difficult.
                        </p>
                    </Col>
                    <Col>
                        <h2>
                            Feature Engineering & Data
                        </h2>
                        <p>
                            Our original dataset was stored in buckets with S3, provided by AWS for easy integration
                            into Rekognition, where we trained and tested our models drawing boxes on target entities.
                            We used packages like OpenCV, Numpy, and AWSAPIs.
                        </p>
                    </Col>
                </Row>
                <Container style={{textAlign:'center'}}>
                    <h2>
                        Addition Tools
                    </h2>
                    <p>
                        (SageMaker Classic IDE)
                    </p>
                </Container>
            </Container>
        </>
    )
}