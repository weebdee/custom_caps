import React from "react";

import './header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='d-flex header-in'>
                <a href='/'>
                    <img className='logo-img-header' src={require('./header-img/logo.png')} alt={'logo-img'} ></img>
                </a>
                <ul className="list-container d-flex">
                    <li className='list-group-a'>Каталог</li>
                    <li className='list-group-a'>Бренды</li>
                    <li className='list-group-a'>О нас</li>
                </ul>
                
                <div className='input-container '>
                    <form>
                        <input type='text' className='search'></input>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                </div>
                <a href='/'>
                    <img className='cart-img' src={require('./header-img/shop-cart.png')} alt={'cart-img'}></img>
                </a>
            </div>
            <hr/>
        </div>
    );
};

export default Header;