import React from 'react'
import './Header.css'
import NavBar from './NavBar'
import HeaderImg from '../../Resources/images/logos/Frame.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <>
            <NavBar />
            <header className="header">
                <div className="container">
                    <main className="row d-flex align-items-center">
                        <div className="col-md-6 m-0 p-0">
                            <h1 className="text-capitalize">Let's grow your brand to the next level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem ducimus blanditiis earum doloribus tenetur!</p>
                            <button onClick={() => history.push('/dashboard')}>Hire Us</button>
                        </div>
                        <div className="col-md-6 m-0 p-0">
                            <img className="w-100" src={HeaderImg} alt="Hearer Img" />
                        </div>
                    </main>
                </div>
            </header>
        </>
    );
};

export default Header;