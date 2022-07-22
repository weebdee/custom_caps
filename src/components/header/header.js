import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import withCapsService from "../hoc";

import './header.css';

const Header = ({capsService}) => {
    const [searchValue, setSearchValue] = useState('')
    const [capsName, setCapsName] = useState([])

    const getCapsName = () => {
        return capsService.getAllCaps()
            .then((data) =>
                setCapsName(data)
            )
    }
    useEffect(() => {
        getCapsName()
    }, [])

    const onSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const filteredCaps = capsName.filter(caps => {
        return caps.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (
        <div className='header-container'>
            <div className='d-flex header-in'>
                <a href='/'>
                    <img className='logo-img-header' src={require('./header-img/logo.png')} alt={'logo-img'} ></img>
                </a>
                <ul className="list-container d-flex">
                    <li className='list-group-a'>
                        <a className='list-group-a' href='/catalog/'> Каталог </a>
                    </li>
                    <li className='list-group-a list-group-a-adap'>Кастомные</li>
                    <li className='list-group-a'><a className='list-group-a' href='/#brand'>Бренды</a></li>
                    <li className='list-group-a'><a className='list-group-a' href='/#aboutUs'>О нас</a></li>
                </ul>
                
                <div className='input-container '>
                <form className="search-form">
                        <input
                            type='text'
                            onChange={onSearchChange}
                            placeholder='type to search'
                            className='search' />
                        <ul className="search-autocomplete">
                            {
                                searchValue
                                    ? filteredCaps.map((capsName, index) => {
                                        return (
                                            <li
                                                className="search-item">
                                                {capsName.name}
                                            </li>
                                        )
                                    }) : null
                            }
                        </ul>
                        <a href='/search-res/'><i className="fa-solid fa-magnifying-glass"></i></a>
                </form>
                </div>
                <Link to='/cart/'>
                    <img className='cart-img' src={require('./header-img/shop-cart.png')} alt={'cart-img'}></img>
                </Link>
                <i className="fa-solid fa-bars"></i>
            </div>
            <hr/>
        </div>
    );
};

export default withCapsService(Header);