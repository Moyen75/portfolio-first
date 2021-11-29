import React from 'react';
import img from '../../../images/projects/epic-easley-c82b83.netlify.app_(iPad).png'
import img2 from '../../../images/projects/epic-easley-c82b83.netlify.app_(iPad Pro).png'

const Projects2 = () => {
    return (
        <div>
            <img style={{ width: '25%'}} src={img} alt="" />
            <img style={{ width: '8%'  }} src={img2} alt="" />
            <div>
                <h2>Booking.com</h2>
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://assignment-11-b1d81.web.app/">Live site</a></span> ||
                <span><a style={{ textDecoration: 'none' }} href="https://github.com/Moyen75/booking.com_client" target='blank'>Code link</a></span>
                ||
                <span><a style={{ textDecoration: 'none' }} target='blank' href="https://github.com/Moyen75/booking.com_server">Code link 2</a></span>
                <h3>About This Project</h3>
                <div style={{ maxWidth: '400px', textAlign: 'left', margin: '0 auto' }}>
                    <ul>
                        <li>This a hotel booking related application</li>
                        <li>I built this app with React.</li>
                        <li>I used Firebase for user login/register.</li>
                        <li>I used bootstrap for creating User interface.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects2;