import React, { useState } from 'react'
import '../DHome.css'

const AddService = () => {
    const [formInfo, setFormInfo] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const collectFormInfo = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'title') {
            setFormInfo({ ...formInfo, serviceName: value })
        }
        else if (name === 'description') {
            setFormInfo({ ...formInfo, description: value })
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!formInfo.serviceName || !formInfo.description) {
            setErrorMessage('Please Fill all the fields')
            return
        }
        fetch('https://safe-brushlands-61338.herokuapp.com/addServices', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => alert(`${data.insertedCount} service inserted`))
            .catch(err => {
                alert('Oops!! Something went wrong during inserting data')
                console.log(err)
            })
    }

    return (
        <section className="add-service">
            <form className="d-flex flex-column" onSubmit={submitForm}>
                <div>
                    <input name="title" type="text" placeholder="Service Title" onBlur={collectFormInfo} />
                    <input name="" type="file" placeholder="Your email address" onBlur={collectFormInfo} />
                </div>
                <textarea name="description" rows="10" placeholder="Project Description" onBlur={collectFormInfo} ></textarea>
                <span style={{ color: 'red' }} className="error">{errorMessage}</span>

                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default AddService;