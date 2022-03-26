import React from 'react';
import './Qa.css';

const Qa = () => {
    return (
        <div className='qa'>
            <h2>1. How React Works?</h2>
            <p>Answer: React is maintained by Facebook. React Components গুলোকে Render করে এবং Actual DOM এ reflect হয় এবং আমরা  Browser এ দেখতে পাই । React internally একটি Virual DOM   তৈরি করে এবং সব Components গুলোকেও সে এখানে রাখে। আমরা যখন পরবর্তী সময়ে  কোনো Components এর ভেতরে Edit  করি তখন নতুন Virtual DOM  তৈরি হয় এবং পুরাতন Virtual DOM  এর সাথে Compare করে এবং শুধু পরিবর্তন হওয়া জিনিস গুলো আপডেট করে Actual DOM এ দেয় এবং Browser এ তা আমরা দেখতে পাই । </p>

            <h2>2. Props vs State</h2>
            <p>Answer: 1. Props are read-only. State changes can be asynchronous.
                2.Props are immutable. State is mutable.
                3.Props can be accessed by the child component. State cannot be accessed by child components.
                4.Props make components reusable. State cannot make components reusable.
                5.Props are used to communicate between components. States can be used for rendering dynamic changes with the component.</p>
        </div>
    );
};

export default Qa;