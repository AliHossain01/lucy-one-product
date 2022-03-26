import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { id, name, price, image } = product;
    //console.log(product);
    //console.log(id);

    return (
        <div className='product'>
            <img src={image} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>

            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <BsFillCartFill className='icon' />
            </button>
        </div>
    );
};

export default Product;