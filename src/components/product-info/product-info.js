import React, { useEffect } from "react";
import Slider from "../main_page/slider";
import { connect } from "react-redux";
import {fetchCap, CapsAddedToCart, CapsRemoveFromCart} from "../../actions";
import withCapsService from "../hoc";
import './product-c.css'
import { Link } from "react-router-dom";



const ProductInfo = ({selectedItemId, fetchCap, cap, CapsAddedToCart, CapsRemoveFromCart}) => {


    useEffect (() => fetchCap(selectedItemId), [selectedItemId])
    const mapSizes = cap.size



    return (
        <div className='main-container'>
            <div className='links-container'>
                <Link to='/' className='from-page'>Home</Link>
                <p className='from-page'>&gt;</p>
                <Link to='/catalog/' className='from-page'>Каталог</Link>
                <p className='from-page'>&gt;</p>
                <p className='to-page'>Детали Продукта</p>
            </div>

            
            

            <div className='product-details'>
                <div className='caps-details-img'>
                    <div className='main-cap-container'>
                        <img className='main-cap-img' src={require('./images/main-img.png')} alt='main-c-img'/>
                    </div>
                    <div className='cap-details'>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img1.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img2.png')} alt='minor-cap-img'/>
                        </div>
                        <div className='detail-cap-container'>
                            <img className='minor-cap-img' src={require('./images/minor-img3.png')} alt='minor-cap-img'/>
                        </div>
                    </div>
                </div>

                
                
                <div className='caps-details-info'>
                    
                    <div className='c-d-sizes'>
                        {
                            mapSizes?.map((val) => {
                            return (
                            <input key={val.value} className='cart-inp-c' type="button" value={val.value}/>)
                            })
                        }
                    </div>
                    <div className='product-count p-c-top'>
                        <input onClick={() => CapsRemoveFromCart(cap.id)} type="button" value='-'/>
                        <p>1</p>
                        <input onClick={() => CapsAddedToCart(cap.id)}  type="button" value='+'/>
                    </div>
                    
                </div>

                <div className='details-box'>
                    <div className='c-d-tittle'>
                        <h3>{cap.brand}</h3>
                        <p>{cap.name}</p>
                    </div>

                    <div className='c-d-price'>{cap.price}сом</div>
                    <button onClick={() => CapsAddedToCart(cap.id)} className='btn yellow-btn c-d-btn'>Добавить в корзину</button>

                </div>
                
            </div>
            
            

            <div className="slider-tittle">
                <h1>Похожие товары</h1>
            </div>
            <Slider />



        </div>
    )
}

const mapStateToProps = (state) => {return state}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCap: (selectedItemId) => fetchCap(dispatch, ownProps.capsService, selectedItemId),
        CapsAddedToCart: (capsId) =>  dispatch(CapsAddedToCart(capsId)),
        CapsRemoveFromCart: (capsId) =>  dispatch(CapsRemoveFromCart(capsId))

    }
}



export default withCapsService(connect(mapStateToProps,mapDispatchToProps)(ProductInfo));