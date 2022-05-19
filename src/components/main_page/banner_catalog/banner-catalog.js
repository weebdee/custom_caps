import React from "react";
import {Link} from 'react-router-dom'

import imgCaps from "./banner-catlg-img/painted-caps.png"
import imgUrl from "./banner-catlg-img/catalog-bg.svg"

import './banner-cat.css'

const BannerCatalog = () => {
    return (
        <div className='banner-c-container'>
            <div className="card-container flex-column">

                <div className="card card-adaptive flex-column-top">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="">
                        <img className="card-img" src={imgCaps} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="card card-adaptive flex-column-top">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="">
                        <img className="card-img" src={imgCaps} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="card card-adaptive">
                    <div className="card-desc">
                        <div className="card-text-desc">
                            <p className="desc-tittle">Supreme</p>
                            <p className="desc-class">Housten Rocket</p>
                            <div className="card-desc-price">2399c</div>
                        </div>
                        <a href="">
                        <img className="card-img" src={imgCaps} alt=""/>
                        </a>
                    </div>
                </div>

            </div>

            <div className='banner-c-desc'>
                <h1 className="c-major-desc">
                    Supreme & New Era
                </h1>
                <p className='c-minor-desc'>collaboration</p>
                <Link to='/catalog/'>
                    <button className="c-desc-btn purple-btn btn">
                     Открыть каталог 
                    </button> 
                    </Link>
            </div>

            <img className='banner-c-caps' src={imgUrl}></img>
            <img className='banner-c-circle'></img>
        </div>
    )
}

export default BannerCatalog;