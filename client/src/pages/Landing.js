import React from "react";
import Main from '../assets/images/main-alternative.svg'
import { Logo } from '../components/index'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                        dolorum, ipsum dolorem molestias rerum consectetur excepturi veniam
                        provident perspiciatis sed adipisci earum alias reprehenderit,
                        tempore magnam inventore? Fugit, excepturi dolore!
                    </p>
                    <Link to='/register' className="btn btn-hero">login/Register</Link>
                </div>
                <img src={Main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    );
};

export default Landing;
