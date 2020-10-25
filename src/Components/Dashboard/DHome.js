import React, { useEffect } from 'react'
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Logo from '../../Resources/images/logos/logo.png'
import AddService from './AddService/AddService'
import AdminServiceList from './AdminServiceList/AdminServiceList'
import MakeAdmin from './MakeAdmin/MakeAdmin'
import Order from './Order/Order'
import Review from './Review/Review'
import UserServiceList from './UserServiceList/UserServiceList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faPlus, faShoppingBasket, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const DHome = () => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const adminInfo = JSON.parse(sessionStorage.getItem('admin'))
    console.log(adminInfo);
    const { path, url } = useRouteMatch()
    const history = useHistory()

    useEffect(() => {
        adminInfo.isAdmin ? history.push('/dashboard/serviceListA') : history.push('/dashboard/order')
    }, [])

    return (
        <section className="dashboard d-flex p-2">
            <div className="col-2">
                <div className="top-nav">
                    <img onClick={() => history.push('/')} style={{ width: '170px' }} src={Logo} alt="Logo" />
                </div>
                <div className="list py-4">
                    <ul type="none">
                        {
                            adminInfo.isAdmin ?
                                <>
                                    <Link to={`${url}/serviceListA`}><li className="dashboard-options"><FontAwesomeIcon icon={faShoppingBasket} /> Service List</li></Link>
                                    <Link to={`${url}/addService`}><li className="dashboard-options"><FontAwesomeIcon icon={faPlus} /> Add Service</li></Link>
                                    <Link to={`${url}/makeAdmin`}><li className="dashboard-options"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</li></Link>
                                </> :
                                <>
                                    <Link to={`${url}/order`}><li className="dashboard-options"><FontAwesomeIcon icon={faShoppingCart} /> Order</li></Link>
                                    <Link to={`${url}/serviceListU`}><li className="dashboard-options"><FontAwesomeIcon icon={faShoppingBasket} /> Service List</li></Link>
                                    <Link to={`${url}/review`}><li className="dashboard-options"><FontAwesomeIcon icon={faCommentAlt} /> Review</li></Link>
                                </>
                        }
                    </ul>
                </div>
            </div>
            <div className="col-10 px-5 pt-2 change">
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