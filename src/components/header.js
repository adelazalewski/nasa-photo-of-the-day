import React from "react";
import "../index.css";
import LikeImg from "./like_PNG48.png";
import NasaLogo from "./1224px-NASA_logo.svg.png";
const Header = (props) => {
    const { numberOfLikes, likeApp } = props;
    return(
        <div className="header">
            <header>
                <a href="https://en.wikipedia.org/wiki/NASA"><img id="nasa-logo" alt="nasa-logo" src={NasaLogo} /></a>
                <h1>NASA's Photo Of The Day App</h1>
                <h2>By Adela Zalewski</h2>
                <img onClick={likeApp} id="like-logo" alt="like-button" src={LikeImg} />
                <p id="likes">You liked this app {numberOfLikes} times. </p>
                <p id="thank-you">Thank you!</p>
            </header>
        </div>
    );
}

export default Header;