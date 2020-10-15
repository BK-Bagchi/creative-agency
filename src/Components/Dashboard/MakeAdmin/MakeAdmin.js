import React from 'react';

const MakeAdmin = () => {
    return (
        <section className="make-admin">
            <p className="m-0">Email</p>
            <form>
                <input type="email" placeholder="Email address" />
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default MakeAdmin;