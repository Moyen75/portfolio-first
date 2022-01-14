import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import '../Header/Header.css'
import email from '../../images/send-email-concept_24908-60316.jpg'

const Contact = () => {
    return (
        <div className='contact-me'>
            <Header></Header>
            <Container className='mt-5'>
                <div>
                    <h1 className='title'>Contact Me</h1>
                    <div className='mt-4'>
                        <Row xs={1} md={3} className='g-4'>
                            <Col>
                                <Card className='card'>
                                    <span><i class="fas fa-map-marker-alt icon"></i></span>
                                    <p>Abudia,Dhanghara,Raiganj,Sirajganj</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <span><i class="fas fa-phone icon"></i></span>
                                    <p>+8801308989743</p>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <span><i class="fas fa-envelope icon"></i></span>
                                    <p>moyenislam75@gmail.com</p>
                                    <p>moyenulislam333@gmail.com</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className>
                    <Row xs={1} md={2} className='g-4 align-items-center'>
                        <Col>
                            <img style={{ width: '100%' }} src={email} alt="" />
                        </Col>
                        <Col>
                            <form id="contactform" action="https://formsubmit.io/send/moyenislam75@gmail.com" method="POST">
                                <input style={{ width: '75%', margin: '6px', padding: '3px' }} name="name" type="text" id="name" placeholder='Name' />
                                <input style={{ width: '75%', margin: '6px', padding: '3px' }} name="email" type="email" placeholder='E-mail' id="email" />
                                <textarea style={{ width: '75%', margin: '6px', padding: '3px' }} placeholder='Message' name="message" id="comment" rows="3"></textarea>

                                <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                                <input style={{ width: '30%', margin: '6px', padding: '3px', backgroundColor: '#14ABF4', color: 'white', border: '1px solid #14ABF4', borderRadius: '5px' }} value="Send" type="submit" />
                            </form>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Contact;