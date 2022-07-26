import React from 'react';
import { Link } from 'react-router-dom';
import './search-res.css'



const SearchRes = () => {
    return (
        <div className='result-container main-container'>
            <div className='links-container'>
                <Link to='/' className='from-page'>Поиск</Link>
                <p className='from-page'>&gt;</p>
                <Link to='/' className='to-page'>Adidas</Link>
            </div>
            <div className='caps-catalog-flex'>
                {/* results should be here */}
            </div>
        </div>
    )
}

export default SearchRes;