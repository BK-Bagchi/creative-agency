import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className="contact">
                <main className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="font-weight-bold">Let us handle your project, professionally</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati expedita distinctio vero ex placeat maxime.</p>
                        </div>
                        <div className="col-md-6">
                            <form className="contact-form d-flex flex-column">
                                <input type="email" placeholder="Your email address" />
                                <input type="text" placeholder="Your name/company's name" />
                                <textarea name="" rows="13" placeholder="Your message"></textarea>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </main>
            </section>
            <footer>
                <p className="text-center m-0">Copyright &copy; BK Bagchi {new Date().getFullYear()}</p>
            </footer>
        </>
    );
};

export default Contact;