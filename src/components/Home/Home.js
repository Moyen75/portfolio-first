import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;