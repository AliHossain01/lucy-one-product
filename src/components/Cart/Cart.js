import React, { useState } from 'react';
import './Cart.css';
import { BsFillCartFill } from "react-icons/bs";
import Item from '../Item/Item';

const Cart = (props) => {
    const { cart, chooseAgain, name, price, image } = props;
    //const { id, name, price, image } = product;
    //console.log(cart);
    const [fish, setFish] = useState([])
    const chooseForMe = (cart) => {
        const selectFish = (cart[Math.floor(Math.random() * cart.length)])
        setFish(selectFish)
    }
    let product = []
    for (const fish of cart) {
        product = [...product, fish]
    }


    return (
        <div>
            <h2>My Cart <BsFillCartFill className='icon' /></h2>
            {/* <p>Selected Items: {cart.length}</p> */}
            {cart.map((item) => (

                <div className='order-info'>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={item.image} alt=""></img>
                    <h3 key={item.id} >{item.name}</h3>
                </div>
            ))}
            <div>
                <button onClick={() => chooseForMe(cart)} className='button button1'>CHOOSE 1 FOR ME</button>
                <button onClick={chooseAgain} className='button button3'>CHOOSE AGAIN</button>

                <Item fish={fish}></Item>
            </div>



        </div>
    );
};

export default Cart;

