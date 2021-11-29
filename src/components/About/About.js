import React from 'react';
import { Card, Col, Container, Nav, NavLink, ProgressBar, Row } from 'react-bootstrap';
import '../Header/Header.css'
import profile from '../../images/profile.png'
import pdf from '../../upload/MoyenulIslam.pdf'

const About = () => {
    return (
        <div className='about-skill'>
            <Container className='main-about'>
                <div className='about'>
                    <h1>ABOUT ME</h1>
                    <hr style={{ width: '50%', margin: '0 auto', paddingBottom: '4px', color: '#14ABF4' }} />
                    <p>
                        My name is <span> Moyenul Islam</span>. I am a dedicated web developer , Strong creative and analytical skills.Motivated designer and developer with experience creating custom websites.Strong collaboration skills and proven history of application development.</p>
                </div>
                <Row xs={1} md={2} className="g-4">

                    <Col>

                        <Card.Img className='about-image' variant="top" src={profile} />

                    </Col>
                    <Col>

                        <Card.Body>
                            <h1>Skills</h1>
                            <div>
                                <h3 className='text-start'>HTML</h3>
                                <ProgressBar now={90} label={"90%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>CSS</h3>
                                <ProgressBar now={70} label={"70%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>Javascript</h3>
                                <ProgressBar now={75} label={"75%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>React</h3>
                                <ProgressBar now={80} label={"80%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>Node.js</h3>
                                <ProgressBar now={60} label={"60%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>Mongodb</h3>
                                <ProgressBar now={70} label={"70%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>Bootstrap</h3>
                                <ProgressBar now={75} label={"75%"} />
                            </div>
                            <div>
                                <h3 className='text-start'>Material UI</h3>
                                <ProgressBar now={70} label={"70%"} />
                            </div>
                            <div>
                                <h4 className='text-start mt-1'>Social</h4>
                                <div className='d-flex text-dark'>
                                    <a href="https://www.facebook.com/profile.php?id=100006908957877" target='blank' className='p-2 text-dark'><i class="fab fa-facebook"></i></a>
                                    <a className='p-2 text-dark' href="https://twitter.com/MoyenIslam3" target='blank'><i class="fab fa-twitter"></i></a>
                                    <a className='p-2 text-dark' href="https://www.linkedin.com/in/moyen-islam-675204211/" target='blank'><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                            <button className='button-resume'><a style={{ textDecoration: 'none' }} href={pdf} download>DOWNLOAD MY RESUME</a></button>
                        </Card.Body>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;