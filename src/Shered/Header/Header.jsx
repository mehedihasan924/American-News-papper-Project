import React from 'react';
import Logo from '../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
   
    
    return (
     <Container>
        {/* Logo And Text */}
            <div className='text-center'>
                <img src={Logo} alt="" />
                <p className='text-secondary'> <small> Journalism Without Fear or Favour</small></p>
                <p>{ moment().format("dddd, MMMM D, YYYY, h:mm:ss a")} </p>
            
            </div>
     {/* Marquee Teg Seting */}
            <div className='d-flex '>
                <Button variant="danger"> Latest</Button>
                <Marquee className='text-danger' speed={100}>
                   I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

      {/* Navbar Style */}
            

         </Container>
      

    );
};

export default Header;