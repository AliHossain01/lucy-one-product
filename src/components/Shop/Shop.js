import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
//import { BsFillCartFill } from "react-icons/bs";
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);





    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }

    if (cart.length > 4) {
        alert('You have selected 4 items');
        const newCart = [...cart];
        newCart.splice(4, 1);
        setCart(newCart);
    }


    const chooseForMe = () => {
        const newCart = cart
        const randomCart = newCart[Math.floor(newCart.length * Math.random())]
        const newRandom = [randomCart];
        setCart(newRandom)
        console.log(newRandom);
    }


    const chooseAgain = () => {
        const newClearCart = [];
        setCart(newClearCart);
    }



    return (
        <div className='shop-container '>
            <div className="products-container  ">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }



            </div>

            <div className="cart-container">
                <div className='cart'>
                    <Cart key={cart.id} cart={cart} chooseAgain={chooseAgain} chooseForMe={chooseForMe}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Shop;