import {Col, Container, Row} from "react-bootstrap";
import TopNavbar from "../components/navbar";

export default function Home() {
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
                        <Col>
                            <h2>Thank You For Watching</h2>
                            <p>
                                We appreciate your attendance in taking a look at our project
                            </p>
                        </Col>
                        <Col>
                            <h2>Time to Solve a Mystery?</h2>
                            <p>
                                Today we start off by observing scenes from surveillance video taken at the scene of a robbery of an ancient artifact called The Four Goat Square Zun
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Container style={{textAlign:'center'}}>
                            <h2>
                                Group Members
                            </h2>
                            <p>
                                Justin, Josh, Ember, Patrick
                            </p>
                        </Container>
                    </Row>
                </Col>
            </Container>
        </>
    )
}