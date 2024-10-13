import {Nav, NavDropdown} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const TopNavbar = () => {
    return (
        <Navbar className="justify-content-center" expand="lg" style={{
            background: "linear-gradient(145deg, rgba(255,247,107,1) 0%, rgba(255,61,0,1) 100%",
            borderRadius: '0 0 2.5% 2.5%', padding:'10px'
        }}>
            <Navbar.Brand href="/" style={{background: 'whitesmoke', borderRadius: '10%'}}>
                <img
                    alt=""
                    src="/logo192.png"
                    height="45"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            {/*<NavDropdown title={'Dropdown'} id={'basic-nav-dropdown'}>*/}
            {/*</NavDropdown>*/}
            <Nav>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link href="/"><h2>Home</h2></Nav.Link>
                    <Nav.Link href="/procedure"><h2>Procedure</h2></Nav.Link>
                    <Nav.Link href="/results"><h2>Results</h2></Nav.Link>
                </Navbar.Collapse>
            </Nav>
            <Navbar.Toggle style={{marginLeft: 'auto'}}></Navbar.Toggle>
        </Navbar>
    )
}

export default TopNavbar;