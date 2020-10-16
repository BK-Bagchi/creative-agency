import React, { useEffect, useState } from 'react'
import '../DHome.css'

const AdminServiceList = () => {
    const [orderedList, setOrderedList] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/showOrderedService')
            .then(res => res.json())
            .then(data => {
                setOrderedList(data)
                setLoading(false)
            })
    }, [])
    console.log(orderedList);

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
                                                    <select name="" value={status}>
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