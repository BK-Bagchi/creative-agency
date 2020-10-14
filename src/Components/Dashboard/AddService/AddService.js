import React from 'react';

const AddService = () => {
    return (
        <section className="add-service">
            <form className="d-flex flex-column">
                <div>
                    <input type="text" placeholder="Service Title" />
                    <input type="file" placeholder="Your email address" />
                </div>
                <textarea rows="10" placeholder="Project Description"></textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default AddService;