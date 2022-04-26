import React from "react";

import './header.css';

const Header = () => {
    return (
      <div className='header-container'>
        <a>
            <img></img>
        </a>

        <ul className="d-flex">
            <li>
                Каталог
            </li>
            <li>
                Бренды
            </li>
            <li>
                О нас
            </li>
        </ul>

        <input></input>

        <a>
            <img></img>
        </a>
      </div>
    );
  };

export default Header;
