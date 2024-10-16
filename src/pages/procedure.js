import TopNavbar from "../components/navbar";
import {Col, Container, Row} from "react-bootstrap";

export default function Procedure() {
    return (
        <>
            <TopNavbar/>
            <Container>
                <Col>
                    <Row>
                        <h1 style={{textAlign: 'center', padding: '10px', fontWeight: 'bold'}}>
                            Welcome to our Project!
                        </h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}  style={{padding:'10px'}}>
                            <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px'}}>
                                <Container style={{padding: '5%'}}>
                                    <h2>Thank You For Your Time and Consideration</h2>
                                    <p>
                                        We appreciate your attendance in taking a look at our project. I hope that you
                                        enjoy the
                                        journey through seeing the results as much as we enjoyed making them. Our target
                                        tracks
                                        are "Save the World", "Best React App", and "AWS/MetroStar National Treasure
                                        Theft."
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                        <Col xs={12} md={6} style={{padding: '10px'}}>
                            <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px'}}>
                                <Container style={{padding: '5%'}}>
                                    <h2>Ready to Solve a Mystery?</h2>
                                    <p>
                                        Today we start off by observing scenes from surveillance video taken at the
                                        scene of a
                                        robbery of an ancient artifact called The Four Goat Square Zun. We only have
                                        limited
                                        images of the target vehicles, and it's our job to create a reorganization model
                                        to fix
                                        that.
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Container style={{
                            textAlign: 'center',
                            background: 'rgb(225, 225, 235)',
                            borderRadius: '25px',
                            margin: '10px'
                        }}>
                            <h2>
                                Group Members
                            </h2>
                            <p>
                                Ember, Patrick, Josh, and Justin
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <h1 style={{textAlign: 'center', padding: '10px', fontWeight: 'bold'}}>
                            About The Project
                        </h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px', margin: '10px'}}>
                                <Container style={{padding: '5%'}}>
                                    <h2>
                                        AWS Rekognition & More
                                    </h2>
                                    <p>
                                        In our project we primarily used AWS Recognition to analyze our photos and work
                                        with our
                                        Machine Learning models. On top of AWS, we used assistance form programming
                                        languages
                                        like Python when the problems got more difficult.
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                        <Col xs={12} md={6}>
                            <Container style={{background: 'rgb(225, 225, 235)', borderRadius: '25px', margin: '10px'}}>
                                <Container style={{padding: '5%'}}>
                                    <h2>
                                        Feature Engineering & Data
                                    </h2>
                                    <p>
                                        Our original dataset was stored in buckets with S3, provided by AWS for easy
                                        integration
                                        into Rekognition, where we trained and tested our models drawing boxes on target
                                        entities. We used packages like OpenCV and Numpy.
                                    </p>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                    <Container style={{textAlign: 'center'}}>
                        <h2>
                            Addition Tools
                        </h2>
                        <p>
                            Additional tools and features we used for troubleshooting were package and library
                            documentation, Java, Vercel, ReactJS, Bootstrap, Canva, and SageMaker.
                        </p>
                    </Container>
                </Col>
            </Container>
        </>
    )
}