import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import QZone from '../Q-Zone/QZone';
import Right_img from '../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
           <h3> Login With</h3>
           <Button className='mb-2' variant="primary"><FaGoogle /> Login With Google</Button>
           <Button className='mb-3' variant="secondary"> <FaGithub />Login With Github</Button>
           <div>
            <h4>Find Us On</h4>
            <ListGroup>
                <ListGroup.Item> <FaFacebookF />Facebook</ListGroup.Item>
                <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                <ListGroup.Item> <FaInstagram/>Intagram</ListGroup.Item>          
            </ListGroup>
           </div>
           <QZone></QZone>

            <div className='position-relative '> 
            <div className='text-center position-absolute pt-5 text-light '>
                     <h4>Create an Amazing Newspaper</h4>
                     <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                     <Button className='btn '> Learn More </Button>
                </div>
                <img src={Right_img} alt="" />

               
           </div>
        </div>
    );
};

export default RightNav;