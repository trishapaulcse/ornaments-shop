import React from 'react';
import './Ornaments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Ornaments = ({ ornament, handlerAddToCart }) => {
    const { id, name, price } = ornament;

    return (
        <div className='ornaments-container'>
            <img src={ornament.img} alt="" />
            <p>Ornament Name~<b>{name}</b></p>
            <p>Ornament Id: {id}</p>
            <p>Ornament price: ${price}</p>
            <div className='ornament-btn-div' >
                <button className='ornament-btn' onClick={() => handlerAddToCart(ornament)} > Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </div>

    );
};

export default Ornaments;