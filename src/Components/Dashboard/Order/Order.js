import React from 'react';

const Order = () => {
    return (
        <section className="order">
            <form className="d-flex flex-column">
                <input type="text" placeholder="Your name/company's name" />
                <input type="email" placeholder="Your email address" />
                <input type="text" placeholder="Your Order" />
                <textarea rows="10" placeholder="Project Description"></textarea>
                <div>
                    <input type="text" placeholder="Price" />
                    <input type="file" />
                </div>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Order;