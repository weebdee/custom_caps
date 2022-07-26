import React from "react";
import kepka3 from './cart-img/kepka3.png'
import './cart-c.css'
import "./PopUpWindow/PopUpWindow";
import {useState} from "react";
import Modal from "./PopUpWindow/PopUpWindow";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";






const Cart = ({items, CapsAddedToCart, CapsRemoveFromCart} ) => {
    const [openModal, setOpenModal] = useState(false);
    console.log(items);
   const content = items?.map((item, idx) => {
       return (
           <div key={item.id}>
               <div key={idx} className='cart'>
                   <img src={kepka3} alt="cap-3"/>
                   <div className='product-count'>
                       <input onClick={() => CapsRemoveFromCart(item.id)} type="button" value='-'/>
                       <p>{item.count}</p>
                       <input onClick={() => CapsAddedToCart(item.id)} type="button" value='+'/>
                   </div>
                   <input className='cart-inp' type="button" value={item.size}/>
                   <div className='text-cart'>
                       <h4>{item.brandName}</h4>
                       <p>{item.capName}</p>
                   </div>
                   <h2>{item.total}сом </h2>

                 </div>
           </div>
       )
   })



    return (
        <div className='catalog-container main-container'>
            <div className='links-container'>
                <Link to='/' className='from-page'>Home</Link>
                <p className='from-page'>&gt;</p>
            </div>
            <hr className='thick-hr'/>
            {content}
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

const mapStateToProps = (state) => {
    return {
        items: state.cartItems
    }
}


export default connect(mapStateToProps, actions)(Cart);