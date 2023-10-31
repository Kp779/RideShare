// Footer.js

import React from 'react';
import FacebookIcon from "../assets/images/icons8-facebook-50.png";
import InstaIcon from "../assets/images/icons8-instagram-30.png";
import twitterIcon from "../assets/images/icons8-twitter-30 (1).png";

const Footer = () => {
    const footerStyle = {
        height : '12rem'
    };
    return (
        <>
            <footer className=' bg-primary d-flex flex-column justify-content-center' style={footerStyle}>
                <div className='icons d-flex justify-content-center'>
                <a><img className="img-fluid" src={FacebookIcon} alt="" /></a>
                <a><img className="img-fluid m-2" src={InstaIcon} alt="" /></a>
                <a><img className="img-fluid m-1" src={twitterIcon} alt="" /></a>
                </div>
                <div className='content fw-semibold  text-center'>
                    <p className='m-0'>Ride . Share . Connect</p>
                    <p className='m-0'>Terms of use . Privacy Policy</p>
                    <h6 className='m-1'>&copy; 2008 Clarify Money</h6>
                </div>
            </footer>
        </>
    );
}

export default Footer;
