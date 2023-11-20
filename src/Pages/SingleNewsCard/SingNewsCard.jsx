import React, { useContext, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import { AuthContext } from '../../Provider/AuthProvaiders';



const SingNewsCard = () => {
    const {caterogiseData}=useContext(AuthContext)
   console.log(caterogiseData);

    return (
<div>
   {
   caterogiseData.map()
   }
</div>
    );
};

export default SingNewsCard;