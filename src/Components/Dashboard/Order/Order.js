import React, { useEffect } from 'react'
import { useState } from 'react';
import '../DHome.css'

const Order = () => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const [formInfo, setFormInfo] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        setFormInfo({ ...formInfo, name: loginInfo.displayName, email: loginInfo.email, status: 'pending' })
    }, [])

    const collectFormInfo = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'order') {
            setFormInfo({ ...formInfo, order: value })
        }
        else if (name === 'price') {
            setFormInfo({ ...formInfo, price: Number(value) })
        }
        else if (name === 'description') {
            setFormInfo({ ...formInfo, description: value })
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        const { price, order, description } = formInfo
        if (!price || !order || !description) {
            setErrorMessage('Please fill all of the fields')
            return
        }
        fetch('http://localhost:4000/orderService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => alert(`${data.insertedCount} service ordered`))
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="order">
            <form className="d-flex flex-column" onSubmit={submitForm}>
                <input type="text" placeholder="Your name/company's name" value={loginInfo.displayName} readOnly />
                <input type="email" placeholder="Your email address" value={loginInfo.email} readOnly />
                <input name="order" type="text" placeholder="Your Order" onBlur={collectFormInfo} />
                <textarea name="description" rows="8" placeholder="Project Description" onBlur={collectFormInfo} ></textarea>
                <div>
                    <input name="price" type="text" placeholder="Price" onBlur={collectFormInfo} />
                    <input type="file" />
                </div>
                <span className="error" style={{ color: 'red' }}>{errorMessage}</span>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Order;