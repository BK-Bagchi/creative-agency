import React from 'react'
import './ClientCompany.css'
import Slack from '../../Resources/images/logos/slack.png'
import Google from '../../Resources/images/logos/google.png'
import Uber from '../../Resources/images/logos/uber.png'
import Netflix from '../../Resources/images/logos/netflix.png'
import Airbnb from '../../Resources/images/logos/airbnb.png'

const ClientCompany = () => {
    return (
        <section className="client-company container d-flex flex-wrap justify-content-center">
            <img src={Slack} alt="Slack" />
            <img src={Google} alt="Google" />
            <img src={Uber} alt="Uber" />
            <img src={Netflix} alt="Netflix" />
            <img src={Airbnb} alt="Airbnb" />
        </section>
    );
};

export default ClientCompany;