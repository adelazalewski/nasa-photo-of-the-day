import React from "react";
import "../index.css";
import LikeImg from "./like_PNG48.png";
import NasaLogo from "./1224px-NASA_logo.svg.png";
import styled from "styled-components";
import {DivWraper} from "./divBackground";

// export const HeaderWraper = styled.div`
// background: #008B8B;
// `;
const HeaderTag = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Header = (props) => {
    const { numberOfLikes, likeApp } = props;
    return(
        <DivWraper>
            <HeaderTag>
                <div>
                    <a href="https://en.wikipedia.org/wiki/NASA"><img id="nasa-logo" alt="nasa-logo" src={NasaLogo} /></a>
                </div>
                <div className="app-title">
                    <h1>NASA's Photo Of The Day App</h1>
                    <p>By Adela Zalewski</p>
                </div>
                <div className="likeButton-div">
                    <img onClick={likeApp} id="like-logo" alt="like-button" src={LikeImg} />
                    <p id="likes">You liked this app {numberOfLikes} times. </p>
                    <p id="thank-you">Thank you!</p>
                </div>
            </HeaderTag>
        </DivWraper>
    );
}

export default Header;