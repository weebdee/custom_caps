import React from "react";
import kepka3 from './cart-img/kepka3.png'
import './cart-c.css'
import "./PopUpWindow/PopUpWindow";
import {useState} from "react";
import Modal from "./PopUpWindow/PopUpWindow";


const Cart = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='catalog-container main-container'>
            <div className='links-container'>
                <a href='/' className='from-page'>Home</a>
                <p className='from-page'>&gt;</p>
                <a href='/cart/' className='to-page'>Корзина</a>
            </div>
            <hr className='thick-hr'/>
            <div className='cart'>
                <img src={kepka3} alt="cap-3"/>
                <div className='product-count'>
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
                <button className='btn yellow-btn cart-btn' onClick={() => setOpenModal(true)}>Купить</button>
                {/*dont forget this => */}{openModal && <Modal/>}
            </div>
        </div>
    )
}

export default Cart;