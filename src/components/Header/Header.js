import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <a href="/cvf"> <BsFillCartFill /> চলনবিল ভিলেজ ফুডস</a>
            <div>

                <a href="/products">All Products</a>
                <a href="/orders">Orders</a>
                <a href="https://www.facebook.com/ColonbilVillageFood">Contact Us</a>
                <a href="/sign">Sign Up</a>
            </div>
        </nav>
    );
};

export default Header;