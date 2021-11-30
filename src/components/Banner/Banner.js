import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../Header/Header.css'

const Banner = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/services')
    }
    return (
        <div className='top-banner'>
            <Container className='main-banner'>
                <div>
                    <h1>Moyenul Islam</h1>
                    <div className='main'>
                        <h4> MERN stack Developer  || Graphics Designer.</h4>
                    </div>
                    <p>Experienced Freelance with a demonstrated history of working in the education management industry. Skilled in Node.js, React Native, Front-end Development, Bootstrap, and Cascading Style Sheets (CSS). </p>
                    <button className='button' onClick={handleClick}>view my work</button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;