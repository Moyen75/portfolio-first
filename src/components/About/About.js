import React from 'react';
import { Card, Col, Container, Nav, NavLink, ProgressBar, Row } from 'react-bootstrap';
import '../Header/Header.css'
import profile from '../../images/profile.png'
import pdf from '../../upload/MoyenulIslam.pdf'
import img from '../../images/profile.png';
import news from '../../New folder/Moyenul Islam.pdf'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-skill'>
            <Container className='main-about'>
                <div className='about'>
                    <h1 className='title'>ABOUT ME</h1>
                    <p>
                        My name is <span className='name'> Moyenul Islam</span>. I am a dedicated web developer , Strong creative and analytical skills.Motivated designer and developer with experience creating custom websites.Strong collaboration skills and proven history of application development.</p>
                </div>
                <Row xs={1} md={2} className="g-4 align-items-center">

                    <Col>

                        {/* <Card.Img className='about-image' variant="top" src={profile} /> */}
                        <div className='ps-5'>
                            <h5 style={{ textAlign: 'left' }}>Here are a Few Highlights:</h5>
                            <ul>
                                <li className='list-item'>Full Stack web development</li>
                                <li className='list-item'>Interactive Front End as per the design</li>
                                <li className='list-item'>React</li>
                                <li className='list-item'>Context API for State Management</li>
                                <li className='list-item'>Building REST API</li>
                                <li className='list-item'>Managing database</li>
                            </ul>
                        </div>

                    </Col>
                    <Col>

                        <Card.Body>
                            <h1 className='name'>My some skills</h1>

                            <div className='skills'>
                                <span className='text-start'>HTML</span>
                                <span className='text-start'>CSS</span>
                                <span className='text-start'>Javascript</span>
                                <span className='text-start'>React</span>
                                <span className='text-start'>Node.js</span>
                                <span className='text-start'>Mongodb</span>
                                <span className='text-start'>Bootstrap</span>
                                <span className='text-start'>Material UI</span>
                            </div>
                            <div>
                                <h4 className='text-start mt-1 name'>Social</h4>
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
                            <button className='bu'><Link to='/contact'>Hire Me</Link></button>
                            <button className='button-resume'><a style={{ textDecoration: 'none' }} href='https://drive.google.com/file/d/1HhNpzuYc48_6H7q1eB9gRHDktPrrgMnB/view?usp=sharing' target='blank' download>GET RESUME</a></button>
                        </Card.Body>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;