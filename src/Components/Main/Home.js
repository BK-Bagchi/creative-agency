import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header />
            <ClientCompany />
            <Services />
            <Feedback />
            <Contact />
        </>
    );
};

export default Home;