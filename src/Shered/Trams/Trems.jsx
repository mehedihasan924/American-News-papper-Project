import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trems = () => {
    return (
        <Container className=' w-50 mx-auto'>
        <h1>Trems & Condition</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim repellat labore optio repellendus distinctio fugit saepe nulla, ad iure ducimus animi maiores nemo est repudiandae doloribus minima? Voluptates, neque. Quam.</p>
         <h3> Go back tp <Link to="/register"> Register</Link></h3>
     </Container>
    );
};

export default Trems;