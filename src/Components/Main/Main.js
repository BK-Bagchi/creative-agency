import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Main = () => {
    return (
        <>
            <Header />
            <ClientCompany />
            <Services />
            <Feedback />
        </>
    );
};

export default Main;