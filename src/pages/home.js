import {Col, Container, Row} from "react-bootstrap";
import TopNavbar from "../components/navbar";
import Page from "../components/page";
import HomeNavbar from "../components/homenav";



export default function Home() {
    return (
        <>
            <HomeNavbar/>
                <Page/>
        </>
    )
}