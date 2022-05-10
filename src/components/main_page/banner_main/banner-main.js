import React from "react";

import './banner-m.css'

import ellipse1 from './main-b-img/Ellipse_1.png'
import kepka1 from './main-b-img/kepka1.png'
import kepka2 from './main-b-img/kepka2.png'
import kepka3 from './main-b-img/kepka3.png'
import ellipse2 from './main-b-img/Ellipse_2.png'
import ellipse3 from './main-b-img/Ellipse_5.svg'

const BannerMain = () => {
    return (
        <div className="main-banner-container">
            <img src={ellipse1} className='p-absolute '/>
            <img src={kepka2} className='p-absolute cap-left'/>
            <img src={kepka3} className='p-absolute absolute-right'/>
            <img src={ellipse2} className='p-absolute absolute-right ellipse-right'/>
            <img src={ellipse3} className='p-absolute absolute-right ellipse-right'/>
            <img src={kepka1} className='p-absolute cap-center'/>

            <div className='banner-main-text'>
                <div className='banner-main-tittle'>
                    <h1>NEW ERA</h1>
                    <span className='square'></span>
                </div>
                <p>
                    Новая коллекция 2021 уже доступны на заказ яркие цвета, винтажный принт 70х, тематические группы и отличное качество
                </p>
                <a className='c-desc-btn btn yellow-btn'>Открыть каталог</a>
            </div>
        </div>
        
    )
}

export default BannerMain;