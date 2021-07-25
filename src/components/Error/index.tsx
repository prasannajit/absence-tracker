import React from 'react';
import './error.css';
import error_logo from './error_icon.svg';

const Error = () => {
    const handleClick = () => {
        window.history.go(0);
    };
    return (
        <section className="ErrorSectionWrapper">
            <header className="ErrorHeading">
                <figure>
                    <img className="ErrorHeadingIcon" src={error_logo} width="36px" height="36px" alt="Error" />
                </figure>
                <h1 className="ErrorHeadingText">Something went wrong</h1>
            </header>
            <p className="RetryMessage">Please retry by clicking the button below</p>
            <button className="PrimaryBtn" onClick={handleClick}>Try again</button>
        </section>
    )
};

export default Error;