import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <ClientCompany />
            <Services />
            <Works />
            <Feedback />
            <Contact />
        </>
    );
};

export default Home;