import React from "react";
import {Link} from 'react-router-dom'

import './header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='d-flex header-in'>
                <a href='/'>
                    <img className='logo-img-header' src={require('./header-img/logo.png')} alt={'logo-img'} ></img>
                </a>
                <ul className="list-container d-flex">
                    <li className='list-group-a'>
                        <Link className='list-group-a' to='/catalog/'> Каталог </Link>
                    </li>
                    <li className='list-group-a list-group-a-adap'>Кастомные</li>
                    <li className='list-group-a'>Бренды</li>
                    <li className='list-group-a'>О нас</li>
                </ul>
                
                <div className='input-container '>
                    <form>
                        <input type='text' className='search'></input>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                </div>
                <Link to='/cart/'>
                    <img className='cart-img' src={require('./header-img/shop-cart.png')} alt={'cart-img'}></img>
                </Link>
            </div>
            <hr/>
        </div>
    );
};

export default Header;