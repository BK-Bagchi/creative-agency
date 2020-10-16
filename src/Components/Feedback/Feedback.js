import React, { useEffect, useState } from 'react'
import './Feedback.css'
import Customer1 from '../../Resources/images/customer-1.png'
import Customer2 from '../../Resources/images/customer-2.png'
import Customer3 from '../../Resources/images/customer-3.png'

const UserFeedback = ({ name, image, feedback }) => {
    return (
        <div className="col-md-4 customer">
            <div className="row d-flex align-items-center">
                <div className="col-4">
                    <img className="customer-img" src={image} alt="Customer" />
                </div>
                <div className="col-8">
                    <h5 className="font-weight-bold">{name}</h5>
                    <p>CEO, Manpol</p>
                </div>
            </div>
            <p className="my-3 text-center">{feedback}</p>
        </div>
    )
}
const Feedback = () => {
    const [feedback, setFeedback] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://safe-brushlands-61338.herokuapp.com/feedback')
            .then(res => res.json())
            .then(data => {
                setFeedback(data)
                setLoading(false)
            })
    }, [])

    return (
        <section className="feedback my-5">
            <h2 className="text-center mb-5">Clients <span className="span-color">Feedback</span></h2>
            <div className="container">
                <div className="row">
                    {
                        loading ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            <>
                                <UserFeedback name={'Nash Patrik'} image={Customer1} feedback={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.'} />
                                <UserFeedback name={'Miriam Barron'} image={Customer2} feedback={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.'} />
                                <UserFeedback name={'Bria Malone'} image={Customer3} feedback={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus totam alias, ratione doloribus quasi.'} />
                                {
                                    feedback.map(comment => {
                                        const { _id, name, description } = comment
                                        return (
                                            <UserFeedback key={_id} name={name} image={Customer2} feedback={description} />
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

export default Feedback;