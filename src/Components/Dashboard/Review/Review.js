import React from 'react';

const Review = () => {
    return (
        <section className="review">
            <form className="d-flex flex-column">
                <input type="text" placeholder="Your name/company's name" />
                <input type="email" placeholder="Your email address" />
                <textarea rows="10" placeholder="Your Description"></textarea>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default Review;