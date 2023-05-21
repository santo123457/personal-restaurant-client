import React from 'react';
import { Link } from 'react-router-dom';

const ReviewNow = () => {
    return (
        <div>

            review orders will show here in ReviewNow component
            <button className='btn btn-outline btn-primary'>
            <Link to="/review-us">ReView Us</Link>
            </button>
        </div>
    );
};

export default ReviewNow;