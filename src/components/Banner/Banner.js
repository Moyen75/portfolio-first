import React from 'react';
import { Container } from 'react-bootstrap';
import '../Header/Header.css'

const Banner = () => {
    return (
        <div className='top-banner'>
            <Container className='main-banner'>
                <div>
                    <h1>Moyenul Islam</h1>
                    <h4><span> MERN stack Developer </span> || <span>Graphics Designer</span></h4>
                    <p>Experienced Freelance with a demonstrated history of working in the education management industry. Skilled in Node.js, React Native, Front-end Development, Bootstrap, and Cascading Style Sheets (CSS). </p>
                    <button className='button'>view my work</button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;