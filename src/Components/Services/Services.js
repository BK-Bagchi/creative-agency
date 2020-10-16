import React, { useEffect, useState } from 'react'
import './Services.css'
import Service1 from '../../Resources/images/icons/service1.png'
import Service2 from '../../Resources/images/icons/service2.png'
import Service3 from '../../Resources/images/icons/service3.png'

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/services')
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
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div> :
                            <>
                                <div className="col-md-4 service d-flex flex-column">
                                    <img className="service-img" src={Service1} alt="Service" />
                                    <h5 className="text-center font-weight-bold">Web and Mobile Design</h5>
                                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore quas facilis dolores cupiditate optio?</p>
                                </div>
                                <div className="col-md-4 service d-flex flex-column">
                                    <img className="service-img" src={Service2} alt="Service" />
                                    <h5 className="text-center font-weight-bold">Graphic Design</h5>
                                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore quas facilis dolores cupiditate optio?</p>
                                </div>
                                <div className="col-md-4 service d-flex flex-column">
                                    <img className="service-img" src={Service3} alt="Service" />
                                    <h5 className="text-center font-weight-bold">Webs Development</h5>
                                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore quas facilis dolores cupiditate optio?</p>
                                </div>
                                {
                                    services.map(service => {
                                        const { _id, serviceName, description } = service
                                        return (
                                            <div key={_id} className="col-md-4 service d-flex flex-column">
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