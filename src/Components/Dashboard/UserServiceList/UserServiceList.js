import React from 'react'
import Img from '../../../Resources/images/icons/service1.png'

const UserServiceList = () => {
    return (
        <section className="user-service-list">
            <div className="row">
                <div className="col-md-6">
                    <div className="px-3 service-item">
                        <div className="d-flex justify-content-between">
                            <img style={{ width: '70px' }} src={Img} alt="Img" />
                            <button>Done</button>
                        </div>
                        <h3>Web & Mobile design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio, soluta ullam commodi maxime dolorum?</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="px-3 service-item">
                        <div className="d-flex justify-content-between">
                            <img style={{ width: '70px' }} src={Img} alt="Img" />
                            <button>Done</button>
                        </div>
                        <h3>Web & Mobile design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio, soluta ullam commodi maxime dolorum?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserServiceList;