import React from 'react';
import img from '../../../images/projects/laughing-almeida-093716.netlify.app_(iPad Pro).png'
import img2 from '../../../images/projects/laughing-almeida-093716.netlify.app_(iPhone X).png'

const Project6 = () => {
    return (
        <div>
            <img style={{ width: '25%', }} src={img} alt="" />
            <img style={{ width: '8%' }} src={img2} alt="" />
            <div>
                <h2>Kawmi shop</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://laughing-almeida-093716.netlify.app/">Live site</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a shopping related application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project6;