import React, { useEffect, useState } from 'react'
import './Services.css'
import Service1 from '../../Resources/images/icons/service1.png'
import Service2 from '../../Resources/images/icons/service2.png'
import Service3 from '../../Resources/images/icons/service3.png'
import { useHistory } from 'react-router-dom'

const Service = ({ image, service, history }) => {
    return (
        <div className="col-md-4 service d-flex flex-column" onClick={() => history.push('/dashboard')}>
            <img className="service-img" src={image} alt="Service" />
            <h5 className="text-center font-weight-bold">{service}</h5>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore quas facilis dolores cupiditate optio?</p>
        </div>
    )
}
const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        fetch('https://safe-brushlands-61338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <section className="my-5 services d-flex flex-column align-items-center">
            <h2 className="mb-5 text-center">Provide awesome <span className="span-color">services</span></h2>
            <div className="container">
                <div className="row">
                    {
                        loading ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div> :
                            <>
                                <Service image={Service1} service={'Web and Mobile Design'} history={history} />
                                <Service image={Service2} service={'Graphic Design'} history={history} />
                                <Service image={Service3} service={'Webs Development'} history={history} />
                                {
                                    services.map(service => {
                                        const { _id, serviceName, description } = service
                                        return (
                                            <div key={_id} className="col-md-4 service d-flex flex-column" onClick={() => history.push('/dashboard')}>
                                                <img className="service-img" src={Service3} alt="Service" />
                                                <h5 className="text-center font-weight-bold">{serviceName}</h5>
                                                <p className="text-center">{description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;