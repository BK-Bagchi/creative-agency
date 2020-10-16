import React, { useState } from 'react';

const Review = () => {
    const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    const [formInfo, setFormInfo] = useState({
        name: loginInfo.displayName,
        email: loginInfo.email,
        description: ''
    });
    const [errorMessage, setErrorMessage] = useState('')

    const collectFormInfo = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'description') {
            setFormInfo({ ...formInfo, description: value })
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        const { description } = formInfo
        if (!description) {
            setErrorMessage('Please insert a description')
            return
        }
        fetch('https://safe-brushlands-61338.herokuapp.com/userReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => alert(`${data.insertedCount} review inserted`))
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="review">
            <form className="d-flex flex-column" onSubmit={submitForm}>
                <input name="name" type="text" placeholder="Your name/company's name" value={loginInfo.displayName} readOnly />
                <input name="email" type="email" placeholder="Your email address" value={loginInfo.email} readOnly />
                <textarea name="description" rows="10" placeholder="Your Description" onBlur={collectFormInfo}></textarea>

                <span style={{ color: 'red' }} className="error">{errorMessage}</span>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Review;