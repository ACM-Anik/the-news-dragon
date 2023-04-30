import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mx-auto '>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat, ab dignissimos laborum magnam adipisci neque atque dicta a natus!</p>

            <p>Go Back To <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;