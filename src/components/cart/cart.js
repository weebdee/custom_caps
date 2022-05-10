import React from "react";
import kepka3 from './cart-img/kepka3.png'
import './cart-c.css'

const Cart = () => {
    return (
        <div className='catalog-container main-container'>
            <div className='links-container'>
                <a className='from-page'>Home</a>
                <p className='from-page'>&gt;</p>
                <a className='to-page'>Корзина</a>
            </div>
            <hr className='thick-hr'/>
            <div className='cart'>
                <img src={kepka3} alt=""/>
                <div className='cart-count'>
                    <input type="button" value='-'/>
                    <p>1</p>
                    <input type="button" value='+'/>
                </div>
                <input className='cart-inp' type="button" value='L'/>
                <div className='text-cart'>
                    <h4>New era</h4>
                    <p>black snapback 59 fifty</p>
                </div>
                <h2>3200сом</h2>
            </div>
            <hr className='thick-hr'/>
            <div className='cart-info'>
                <h2>Ваша информация</h2>
                <input className='inp' type="text" placeholder='Имя'/>
                <input className='inp' type="text" placeholder='+996 777 888 999'/>
                <a className='btn yellow-btn cart-btn'>Купить</a>
            </div>
        </div>
    )
}

export default Cart;