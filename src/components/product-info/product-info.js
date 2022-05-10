import React from "react";

import './product-c.css'


const ProductInfo = () => {
    return (
        <div className='main-container'>
            <div className='links-container'>
                <a className='from-page'>HOME</a>
                <p className='from-page'>&gt;</p>
                <a className='from-page'>Каталог</a>
                <p className='from-page'>&gt;</p>
                <a className='to-page'>Детали Продукта</a>
            </div>

            
            

            <div className='product-details'>
                <div className='caps-details-img'>
                    <div className='main-cap-container'>
                        <img className='main-cap-img' src={require('./images/main-img.png')}/>
                    </div>
                    <div className='cap-details'>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img1.png')}/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img2.png')}/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img3.png')}/>
                        </div>
                    </div>
                </div>

                
                
                <div className='caps-details-info'>
                    
                    <div className='c-d-sizes'>
                        <input className='cart-inp-c' type="button" value='S'/>
                        <input className='cart-inp-c' type="button" value='M'/>
                        <input className='cart-inp-c' type="button" value='L'/>
                        <input className='cart-inp-c' type="button" value='XL'/>
                    </div>
                    <div className='product-count p-c-top'>
                        <input type="button" value='-'/>
                        <p>1</p>
                        <input type="button" value='+'/>
                    </div>
                    
                </div>

                <div className='details-box'>
                    <div className='c-d-tittle'>
                        <h3>New Era</h3>
                        <p>black snapback 59 fifty</p>
                    </div>

                    <div className='c-d-price'>3200 сом</div>
                    <a className='btn yellow-btn c-d-btn'>Добавить в корзину</a>

                </div>
                
            </div>
            
            

            <div className="slider-tittle">
                <h1>Похожие товары</h1>
            </div>
            <div className="slider-container">
                <div className="imagesList">
                    <div className="prev">
                        <img src={require('../main_page/slider/img-slider/Vector.jpg')}/>
                    </div>
                    <div className="img_text">
                        <img src={require('../main_page/slider/img-slider/adidas.jpg')}alt="" />
                        <h1>Adidas</h1>
                        <p>San Francisco Baseball</p>
                        <span className="yellow">3800c</span>
                    </div>
                    <div className="img_text">
                        <img src={require('../main_page/slider/img-slider/new_era.jpg')} alt=""/>
                        <h1>New Era</h1>
                        <p>New York Yankies</p>
                        <span className="yellow">3800c</span>
                    </div>
                    <div className="img_text">
                        <img src={require('../main_page/slider/img-slider/nike.jpg')} alt=""/>
                        <h1>Nike</h1>
                        <p>French Fries Series</p>
                        <span className="yellow">4500c</span>
                    </div>
                    <div className="next">
                        <img src={require('../main_page/slider/img-slider/Vector_2.jpg')} alt=""/>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ProductInfo;