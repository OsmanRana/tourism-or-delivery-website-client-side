import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();
    const handleUserSetting = () => {
        history.push('/mybookings')

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"><img className="img-fluid w-50" src="/logo.png" alt="log" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold text-uppercase">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        </Nav>
                        {/* conditional display */}
                        <Nav>
                            {
                                user.displayName && <p className="my-auto mx-3">{user.displayName}</p>
                            }
                            {
                                user.photoURL && <img className="m-3" style={{ width: '35px', height: '35px' }} src={user.photoURL} alt="User" />
                            }
                            {
                                user.email && <img onClick={handleUserSetting} className="ms-3 icon-size m-3" src='./user.png' alt="User Dashboard Settings" />
                            }
                            {
                                user.email || user.uid ? <Button onClick={logOut} variant="danger" className="m-3">Log Out</Button> :
                                    <Link to="/login"><Button variant="light">User Log In</Button></Link>
                            }
                            {
                                !user.email && <Link to="/adminlogin" ><Button className="ms-3" variant="primary">Admin Log In</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;