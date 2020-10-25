import React, { useEffect, useState } from 'react'
import '../DHome.css'

const AdminServiceList = () => {
    const [orderedList, setOrderedList] = useState()
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        fetch('https://safe-brushlands-61338.herokuapp.com/showOrderedService')
            .then(res => res.json())
            .then(data => {
                setOrderedList(data)
                setLoading(false)
            })
    }, [updated])

    const changeStatus = (e, id) => {
        const value = e.target.value
        fetch('https://safe-brushlands-61338.herokuapp.com/changeStatus', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: id, status: value })
        })
            .then(res => res.json())
            .then(data => {
                setUpdated(true)
                alert(`${data.modifiedCount} data updated`)
            })
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="admin-service-list">
            <table className="w-100 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div> :
                            <>
                                {
                                    orderedList.map((list) => {
                                        const { _id, name, email, order, status, description } = list

                                        return (
                                            <tr key={_id}>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{order}</td>
                                                <td>{description}</td>
                                                <td>
                                                    <select className={`${status}`} value={status} onChange={(e) => changeStatus(e, _id)} >
                                                        <option value="pending">Pending</option>
                                                        <option value="done">Done</option>
                                                        <option value="ongoing">On Going</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                    }
                </tbody>
            </table>
        </section>
    );
};

export default AdminServiceList;