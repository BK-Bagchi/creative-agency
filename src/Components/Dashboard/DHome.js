import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from '../../Resources/images/logos/logo.png'

const DHome = () => {
    const { path, url } = useRouteMatch()

    return (
        <section className="dashboard d-flex p-2">
            <div className="col-2">
                <div className="top-nav">
                    <img style={{ width: '170px' }} src={Logo} alt="Logo" />
                </div>
                <div className="list py-4">
                    <ul type="none">
                        <Link to={`${url}/order`}><li>Order</li></Link>
                        <Link to={`${url}/serviceListU`}><li>Service List</li></Link>
                        <Link to={`${url}/review`}><li>Review</li></Link>
                        <Link to={`${url}/serviceListA`}><li>Service List</li></Link>
                        <Link to={`${url}/addService`}><li>Add Service</li></Link>
                        <Link to={`${url}/makeAdmin`}><li>Make Admin</li></Link>
                    </ul>
                </div>
            </div>
            <div className="col-10">b</div>
        </section>
    );
};

export default DHome;