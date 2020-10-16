import React, { useEffect, useState } from 'react'
import Img from '../../../Resources/images/icons/service1.png'

const UserServiceList = () => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const [orderedList, setOrderedList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/showOrderedService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loginInfo.email })
        })
            .then(res => res.json())
            .then(data => {
                setOrderedList(data)
                setLoading(false)
            })
    }, [])

    return (
        <section className="user-service-list">
            <div className="row">
                {
                    loading ?
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        :
                        <>
                            {
                                orderedList.map(item => {
                                    const { _id, status, order, description } = item
                                    return (
                                        <div key={_id} className="col-md-6">
                                            <div className="px-3 service-item">
                                                <div className="d-flex justify-content-between">
                                                    <img style={{ width: '70px' }} src={Img} alt="Img" />
                                                    <button>{status}</button>
                                                </div>
                                                <h3>{order}</h3>
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                }
            </div>
        </section>
    );
};

export default UserServiceList;