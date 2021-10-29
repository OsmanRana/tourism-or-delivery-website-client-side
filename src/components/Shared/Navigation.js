import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"><img className="img-fluid w-50" src="/logo.png" alt="log" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-uppercase">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/gellary#gellary">Gellary</Nav.Link>
                            {/* <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/departments#departments">Departments</Nav.Link> */}

                        </Nav>
                        <Nav>
                            {/* {
                                user.displayName && <p className="my-auto mx-3">{user.displayName}</p>
                            }
                            {
                                user.photoURL && <img style={{ width: '35px', height: '35px' }} src={user.photoURL} alt="User" />
                            }
                            {
                                user.email || user.uid ? <Button onClick={logOut} variant="danger" className="ms-3">Log Out</Button> :
                                    <Link to="/login"><Button variant="light">Log In</Button></Link>
                            }
                            {
                                !user.email && !user.uid ? <Link to="/register" ><Button className="ms-3" variant="primary">Register</Button></Link> :
                                    <span></span>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;