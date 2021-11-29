import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../Header/Header.css'
import logo from '../../images/projects/main/assignment-10-e5779.web.app_(iPad Pro).png'
import logo2 from '../../images/projects/main/assignment-11-b1d81.web.app_(iPad Pro).png'
import logo3 from '../../images/projects/main/assignment-12-782e1.web.app_(iPad Pro) (1).png'
import logo4 from '../../images/projects/main/doctors-portal-37851.web.app_(iPad Pro).png'
import logo5 from '../../images/projects/main/gifted-spence-60c3e3.netlify.app_(Nest Hub).png'
import logo6 from '../../images/projects/main/laughing-almeida-093716.netlify.app_(iPad Pro).png'


const Portfolio = () => {
    return (
        <div className='projects'>
            <Container>
                <div>
                    <div className='my-projects'>
                        <h1>MY PROJECTS</h1>
                        <hr style={{ width: '50%', margin: '0 auto' }} />
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo} />
                                <a href="/project1" className='stretched-link'>.</a>
                            </Card>

                        </Col>
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo2} />
                                <a href="/project2" className='stretched-link'>.</a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo3} />
                                <a href="/project3" className='stretched-link'>.</a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo4} />
                                <a href="/project4" className='stretched-link'>.</a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo5} />
                                <a href="/project5" className='stretched-link'>.</a>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='project'>
                                <Card.Img style={{ width: '100%' }} variant="top" src={logo6} />
                                <a href="/project6" className='stretched-link'>.</a>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;