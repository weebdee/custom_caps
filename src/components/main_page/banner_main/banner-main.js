import React from "react";

import './banner-m.css'

import ellipse1 from './main-b-img/Ellipse_1.png'
import kepka2 from './main-b-img/kepka2.png'
import kepka3 from './main-b-img/kepka3.png'
import ellipse2 from './main-b-img/Ellipse_5.svg'

const BannerMain = () => {
    return (
        <div className="main-banner-container">
            <div className='main-banner-block'>
                <img src={ellipse1} alt="" className='ellipse1'/>
                <img src={kepka2} alt="" className='kepka2'/>
            </div>

            <div className='banner-main-text'>
                <div className='banner-main-tittle'>
                    <h1>NEW ERA</h1>
                    <span></span>
                </div>
                <p>Новая коллекция 2021 уже доступны на заказ <br/>яркие цвета, винтажный принт 70х, тематические <br/>группы
                    и
                    отличное качество</p>
                <button className='main-banner-btn'><a href="">Открыть каталог</a></button>
            </div>

            <div className='main-block-cap'> </div>
            <div className='main-red-circle'>
                <img src={kepka3} alt=""/>
                <span><img src={ellipse2} alt=""/></span>
            </div>
        </div>
        
    )
}

export default BannerMain;