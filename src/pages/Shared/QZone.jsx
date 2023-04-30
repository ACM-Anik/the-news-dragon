import React from 'react';
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-2 rounded'>
            <h2>Q Zone</h2>
            <div className='py-3'>
                <img className='w-75' src={QZone1} alt="" />
                <img className='w-75' src={QZone2} alt="" />
                <img className='w-75' src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;