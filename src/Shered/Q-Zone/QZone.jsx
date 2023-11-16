import React from 'react';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-light text-center py-3 mt-3'>
            <h4> Q-Zone</h4>
            <div>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;