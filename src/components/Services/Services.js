import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Services = () => {
    return (
        <div className='services'>
            <Container>
                <div className="mb-3">
                    <h1>MY SERVICES</h1>
                    <hr style={{ width: '50%', margin: '0 auto', paddingBottom: '4px' }} />
                </div>
                <Row xs={1} md={3} className="g-2 ">
                    <Col className='service'>
                        <i class="fas fa-desktop icon"></i>
                        <h3>WEB DEVELOPMENT</h3>
                        <p>I develop the website.I create high performance website with high speed and its my main skill.</p>
                    </Col>
                    <Col className='service'>
                        <i class="fab fa-envira icon"></i>
                        <h3>UI/UX DESIGN</h3>
                        <p>I do ui/ux design for the websites that helps website to get a unique look.</p>
                    </Col>
                    <Col className='service'>
                        <i class="fas fa-toolbox icon"></i>
                        <h3>BRANDING</h3>
                        <p>Branding is the process of creating a strong, positive perception of a company.</p>
                    </Col>
                    <Col className='service'>
                        <i class="fas fa-camera icon"></i>
                        <h3>PHOTOGRAPHY</h3>
                        <p>I can tell stories through images that I capture through my cameras, and express my personalities and viewpoints through my art.</p>
                    </Col>
                    <Col className='service'>
                        <i class="fab fa-android icon"></i>
                        <h3>APP DEVELOPMENT</h3>
                        <p>I also develop the android apps.I create high performance apps with eye catching UI.</p>
                    </Col>
                    <Col className='service'>
                        <i class="fas fa-chart-line icon"></i>
                        <h3>DIGITAL MARKETING</h3>
                        <p>I have a huge knowledge in digital marketing.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Services;