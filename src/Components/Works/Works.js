import React from 'react'
import './Works.css'
import Slider1 from '../../Resources/images/carousel-1.png'
import Slider2 from '../../Resources/images/carousel-2.png'
import Slider3 from '../../Resources/images/carousel-3.png'
import Slider4 from '../../Resources/images/carousel-4.png'
import Slider5 from '../../Resources/images/carousel-5.png'

const Works = () => {
    return (
        <section className="works">
            <h2 className="mb-5 text-center" style={{ color: 'white' }}>Here are some of <span className="span-color">our works</span></h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Slider1} className="d-block w-100" alt="Slider Img" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider2} className="d-block w-100" alt="Slider Img" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider3} className="d-block w-100" alt="Slider Img" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider4} className="d-block w-100" alt="Slider Img" />
                    </div>
                    <div className="carousel-item">
                        <img src={Slider5} className="d-block w-100" alt="Slider Img" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};

export default Works;