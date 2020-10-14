import React, { useEffect } from 'react'
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Logo from '../../Resources/images/logos/logo.png'
import AddService from './AddService/AddService'
import AdminServiceList from './AdminServiceList/AdminServiceList'
import MakeAdmin from './MakeAdmin/MakeAdmin'
import Order from './Order/Order'
import Review from './Review/Review'
import UserServiceList from './UserServiceList/UserServiceList'

const DHome = () => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const { path, url } = useRouteMatch()
    const history = useHistory()
    useEffect(() => {
        history.push('/dashboard/order')
    }, [])

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
            <div className="col-10 px-5">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <p>Name</p>
                    <div className="d-flex align-items-center">
                        <img style={{ width: '40px', borderRadius: '50%' }} src={loginInfo.photoURL} alt="" />
                        <p className="mx-2">{loginInfo.displayName}</p>
                    </div>
                </div>
                <Switch>
                    <Route path={`${path}/order`}>
                        <Order />
                    </Route>
                    <Route path={`${path}/serviceListU`}>
                        <UserServiceList />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/serviceListA`}>
                        <AdminServiceList />
                    </Route>
                    <Route path={`${path}/addService`}>
                        <AddService />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default DHome;