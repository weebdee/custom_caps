import React from "react";
import './slider.css';

const Slider = () => {
    return (
    <div className='slider-card-container'>
        <div className="card-container">
        
            <div className="card flex-row">
                <div className="card-desc">
                    <a href="">
                    <img className="card-img" src={require('./img-slider/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>

            <div className="card flex-row">
                <div className="card-desc">
                    <a href="">
                    <img className="card-img" src={require('./img-slider/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>

            <div className="card flex-row">
                <div className="card-desc">
                    <a href="">
                    <img className="card-img" src={require('./img-slider/adidas.jpg')} alt=""/>
                    </a>
                    <div className="card-text-desc">
                        <p className="desc-year">2021</p>
                        <p className="desc-tittle">New Era</p>
                        <p className="desc-class">Housten Rocket</p>
                        <div className="text-margin card-desc-price">2399c</div>
                    </div>
                </div>
            </div>



            
        </div>

        <div className='small-caps-container'>
            <div className='small-c-custom'>
                <div className='small-c-desc'>
                    <h3>Кастомные</h3>
                    <p>Создай свой стиль</p>
                </div>
            </div>
            <div className='small-c-exclusive'>
                <div className='small-c-desc'>
                    <h3>Эксклюзив</h3>
                    <p>Найди уникальные кепки</p>
                </div>
            </div>
        </div>

        <div className="head">
            <h1> TOP SELLERS </h1>
        </div>
        <div className="slider-container">
            <div className="imagesList">
                <div className="prev">
                    <img src={require('./img-slider/Vector.jpg')} alt=""/>
                </div>
                <div className="img_text">
                    <img src={require('./img-slider/adidas.jpg')}alt="" />
                    <h1>Adidas</h1>
                    <p>San Francisco Baseball</p>
                    <span className="yellow">3800c</span>
                </div>
                <div className="img_text">
                    <img src={require('./img-slider/new_era.jpg')} alt=""/>
                    <h1>New Era</h1>
                    <p>New York Yankies</p>
                    <span className="yellow">3800c</span>
                </div>
                <div className="img_text">
                    <img src={require('./img-slider/nike.jpg')} alt=""/>
                    <h1>Nike</h1>
                    <p>French Fries Series</p>
                    <span className="yellow">4500c</span>
                </div>
                <div className="next">
                    <img src={require('./img-slider/Vector_2.jpg')} alt=""/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Slider;