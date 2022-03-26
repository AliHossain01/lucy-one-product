import React from 'react';
import './Item.css'
const Fish = ({ fish }) => {
    return (
        <div className='button button1'>
            <h4>Best One For You</h4>
            <h3>{fish.name}</h3>

        </div >
    );
};

export default Fish;