import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../Header/Header.css'
import email from '../../images/email.jpeg'
import gmail from '../../images/gmail.png'

const Contact = () => {
    return (
        <div className='mt-5'>
            <h1 className='title'>Contact Me</h1>
            <Container className='mt-5'>
                <div className='contact-me'>
                    {/* <div className='mt-4'>
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
                    </div> */}
                </div>
                <div className='contact-me'>
                    <div>
                        <div className='d-flex align-items-left ms-2'>
                            <h2 className='text-light me-2'>Get In Touch</h2>
                            <img style={{ width: '40px', height: '40px' }} src={gmail} alt="" />
                            <h2 className='get-touch'>I</h2>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex text-dark  social-icons'>
                            <span className='icons-holder'><a href="https://www.facebook.com/profile.php?id=100006908957877" target='blank' className='p-2 text-dark'><i class="fab fa-facebook social-icon fb"></i></a></span>
                            <span className='icons-holder'>
                                <a className='p-2 text-dark' href="https://twitter.com/MoyenIslam3" target='blank'><i class="fab fa-twitter social-icon"></i></a>
                            </span>
                            <span className='icons-holder'>
                                <a className='p-2 text-dark' href="https://www.linkedin.com/in/moyen-islam-675204211/" target='blank'><i class="fab fa-linkedin social-icon"></i></a>
                            </span>
                        </div>
                    </div>
                    <Row style={{ minHeight: '350px' }} xs={1} md={2} className='g-4 align-items-center '>
                        <Col>
                            <div style={{ textAlign: 'left', color: 'gray', textTransform: 'capitalize' }}>
                                <h3>send your email here!</h3>
                                <img style={{ width: '100%' }} src={email} alt="" />
                            </div>
                        </Col>
                        <Col>
                            <div className='form-email'>
                                <form id="contactform" action="https://formsubmit.io/send/moyenislam75@gmail.com" method="POST">
                                    <input style={{ width: '75%', margin: '6px', padding: '13px' }} name="name" type="text" id="name" placeholder='Name' />
                                    <input style={{ width: '75%', margin: '6px', padding: '13px' }} name="email" type="email" placeholder='E-mail' id="email" />
                                    <textarea style={{ width: '75%', margin: '6px', padding: '13px' }} placeholder='Message' name="message" id="comment" rows="3"></textarea>

                                    <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                                    <input style={{ width: '30%', margin: '6px', padding: '3px', backgroundColor: '#14ABF4', color: 'white', border: '1px solid #14ABF4', borderRadius: '5px' }} value="Send" type="submit" />
                                </form>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    );
};

export default Contact;