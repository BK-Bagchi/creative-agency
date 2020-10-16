import React, { useState } from 'react';

const MakeAdmin = () => {
    const [formInfo, setFormInfo] = useState({ email: '' })
    const [errorMessage, setErrorMessage] = useState('')
    const collectFormInfo = (e) => {
        setFormInfo({
            email: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!formInfo.email) {
            setErrorMessage('Please insert an email address')
            return
        }
        fetch('http://localhost:4000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => alert(`${data.insertedCount} admin inserted`))
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="make-admin">
            <p className="m-0">Email</p>
            <form onSubmit={submitForm}>
                <input type="email" placeholder="Email address" onBlur={collectFormInfo} />
                <input type="submit" value="Submit" />
                <br />
                <span style={{ color: 'red' }} className="error">{errorMessage}</span>
            </form>
        </section>
    );
};

export default MakeAdmin;