import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import pdf from '../../upload/MoyenulIslam.pdf'

const Header = () => {
    return (
        <div><Navbar collapseOnSelect expand="lg" className='nav' variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>Moyenul Islam</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav flex-end " />
                <Navbar.Collapse id="responsive-navbar-nav " className='justify-content-end'>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: 'white' }} href="#home">HOME </Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="#about">ABOUT US</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="#service">SERVICES</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="#portfolio">PORTFOLIO </Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="#testimonials">TESTIMONIALS</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="#contact">CONTACT </Nav.Link>
                        </Nav>
                    </div>
                    <Nav>
                        <a href={pdf} download>RESUME</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;