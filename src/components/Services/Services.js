import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Services = () => {
    return (
        <div className='services'>
            <Container>
                <div className="mb-3">
                    <h1 className='title'>MY SERVICES</h1>
                </div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className='service'>
                            <span><i class="fas fa-desktop  service-icon"></i></span>
                            <h3>WEB DEVELOPMENT</h3>
                            <p>I develop the website.I create high performance website with high speed and its my main skill.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='service'>
                            <span><i class="fab fa-envira  service-icon"></i></span>
                            <h3>UI/UX DESIGN</h3>
                            <p>I do ui/ux design for the websites that helps website to get a unique look.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='service'>
                        <span><i class="fas fa-toolbox service-icon"></i></span>
                        <h3>BRANDING</h3>
                        <p>Branding is the process of creating a strong, positive perception of a company.</p>
                        </Card>
                    </Col>
                    <Col>
                       <Card className='service'>
                       <span> <i class="fas fa-camera service-icon"></i></span>
                        <h3>PHOTOGRAPHY</h3>
                        <p>I can tell stories through images that I capture through my cameras, and express my personalities and viewpoints through my art.</p>
                       </Card>
                    </Col>
                    <Col>
                        <Card className='service'>
                        <span><i class="fab fa-android service-icon"></i></span>
                        <h3>APP DEVELOPMENT</h3>
                        <p>I also develop the android apps.I create high performance apps with eye catching UI.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='service'>
                        <span><i class="fas fa-chart-line  service-icon"></i></span>
                        <h3>DIGITAL MARKETING</h3>
                        <p>I have a huge knowledge in digital marketing.</p>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Services;