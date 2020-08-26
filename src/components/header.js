import React from "react";
import "../index.css";


const Header = (props) => {
    const { numberOfLikes, likeApp } = props;
    return(
        <div className="header">
            <header>
                <img id="nasa-logo" alt="nasa-logo" src="src\components\1224px-NASA_logo.svg.png" />
                <h1>NASA's Photo Of The Day App</h1>
                <h2>By Adela Zalewski</h2>
                <img onClick={likeApp} id="like-logo" alt="like-button" src="src\components\like_PNG48.png" />
                <p id="likes">You liked this app {numberOfLikes} times. </p>
                <p id="thank-you">Thank you!</p>
            </header>
        </div>
    );
}

export default Header;