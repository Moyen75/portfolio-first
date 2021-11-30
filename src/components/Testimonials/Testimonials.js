import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/team/T02ETPL2RB9-U02FY4C3MS4-ec26b8b6486c-512.jpg'
import image2 from '../../images/team/T02ETPL2RB9-U02FEN17FKN-bb995864adde-512.jpg'
import image3 from '../../images/team/T02ETPL2RB9-U02F8FQ2EHG-035bb5c5f359-512.jpg'
import Button from '@restart/ui/esm/Button';
import '../Header/Header.css'


const Testimonials = () => {

    return (
        <div className='about-skill'>
            <Container className='main-about'>
                <div>
                    <h1>Our Team</h1>
                    <hr style={{ width: '50%', margin: '0 auto' }} />
                </div>

                <div>
                    <Row xs={1} md={3} className='g-4'>
                        <Col className='member'>

                            <Card style={{  padding: '5px', margin: '10px 0', boxShadow: '1px 1px 5px 1px gray', backgroundColor: '#14ABF4', color: 'white' }}>
                                <Card.Img style={{ borderRadius: '50%', minHeight: '150px', width: '50%', margin: '0 auto' }} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>Muhammad Nasim Ahmed</Card.Title>
                                    <Card.Text>
                                        Senior Full stack developer
                                    </Card.Text>
                                    <Button variant="primary" className='team-button'>Contact now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='member' >
                            <Card style={{  padding: '5px', boxShadow: '1px 1px 5px 1px gray', margin: '10px 0', backgroundColor: '#14ABF4', color: 'white' }}>
                                <Card.Img style={{ borderRadius: '50%', minHeight: '150px', width: '50%', margin: '0 auto' }} variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title>Muhammad Nasir Uddin</Card.Title>
                                    <Card.Text>
                                        Senior Full stack developer
                                    </Card.Text>
                                    <Button variant="primary" className='team-button'>Contact now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='member'>
                            <Card style={{  padding: '5px', boxShadow: '1px 1px 5px 1px gray', margin: '10px 0', backgroundColor: '#14ABF4', color: 'white' }}>
                                <Card.Img style={{ borderRadius: '50%', minHeight: '150px', width: '50%', margin: '0 auto' }} variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title>Raihan Mahmud</Card.Title>
                                    <Card.Text>
                                        Senior Full stack developer
                                    </Card.Text>
                                    <Button variant="primary" className='team-button'>Contact now</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;