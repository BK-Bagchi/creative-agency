import React from 'react';
import ClientCompany from '../ClientCompany/ClientCompany';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Main = () => {
    return (
        <>
            <Header />
            <ClientCompany />
            <Services />
        </>
    );
};

export default Main;