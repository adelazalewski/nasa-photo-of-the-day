import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";
import HeaderWraper from "./header";

const FooterWraper = styled(HeaderWraper);

const Footer = () => {
    return(
        <div className="footer">
            <footer>
                <p id="copyRight">&copy; NASA's Photo Of The Day 2020</p>
                <div className="social">
                    <a href="https://www.instagram.com/adela_georgiana/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.facebook.com/adela.georgiana.986"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;