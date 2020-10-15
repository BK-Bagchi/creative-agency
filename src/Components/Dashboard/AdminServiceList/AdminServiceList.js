import React from 'react'
import '../DHome.css'

const AdminServiceList = () => {
    return (
        <section className="admin-service-list">
            AdminServiceList
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
                    <tr>
                        <td>Name</td>
                        <td>Email ID</td>
                        <td>Service</td>
                        <td>Project Details</td>
                        <td>
                            <select name="" value="" onChange={""}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="ongoing">On Going</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Email ID</td>
                        <td>Service</td>
                        <td>Project Details</td>
                        <td>
                            <select name="" value="" onChange={""}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="ongoing">On Going</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default AdminServiceList;