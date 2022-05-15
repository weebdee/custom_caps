import React from 'react';
import './Footer.css';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg'

    function Footer(props) {
    return (
        <div className='footer'>
            <hr/>
            <div className='second'>
                <div className='main'>
                    <div className='logo'>
                        <div className='logo-img'>
                            <a href=""><img className='logo-img-footer' src={require('../header/header-img/logo.png')} alt="logo"/></a>
                        </div>
                        <div className='logo-text'>
                            <h6>CUSTOM CAPS</h6>
                            <p>магазин кепок</p>
                        </div>
                    </div>
                        <div className='icons'>
                            <div className='oval'>
                                <a href=""><img className='iconsOfFooter' src={instagram} alt="instagram"/></a>
                            </div>
                            <div className='oval'>
                                <a href=""><img className='iconsOfFooter' src={facebook} alt="facebook"/></a>
                            </div>
                            <div className='oval'>
                                <a href=""><img className='iconsOfFooter' src={twitter} alt="twitter"/></a>
                            </div>
                        </div>
                    </div>
                <p className='cursive'>© Copyright 2019 - Lift Media</p>
            </div>
        </div>
    );
}

export default Footer;