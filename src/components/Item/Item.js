import React from 'react';
import './Item.css'
const Fish = ({ fish }) => {
    return (
        <div>
            <h2>Best One For You</h2>
            <h3>{fish.name}</h3>

        </div >
    );
};

export default Fish;