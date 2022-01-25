import React from "react";
import LogoName from '../assets/images/logo.svg'
import Main from '../assets/images/main.svg'
import styled from "styled-components";

const Landing = () => {
    return (
        <main>
            <nav>
                <img src={LogoName} alt="'jobify" className="logo" />
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
                    <button className="btn btn-hero">login/Register</button>
                </div>
                <img src={Main} alt="job hunt" className="img main-img" />
            </div>
        </main>
    );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
`;

export default Landing;
