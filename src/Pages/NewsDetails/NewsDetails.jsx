import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// import SingNewsCard from '../SingleNewsCard/SingNewsCard';
import NewsCart from '../NewsCart/NewsCart';
import SingNewsCard from '../SingleNewsCard/SingNewsCard';

const NewsDetails = () => {
 const news=useLoaderData()
    const { title, details,image_url, category_id}=news;
    
    return (
      <div>
        <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
         <Link to={`/categories/${category_id}`}> <Button variant="primary"> <FaArrowLeft></FaArrowLeft> All News in This Caterories..</Button>  </Link>   
        </Card.Body>
      </Card>
       
    
      </div>  
    );
};

export default NewsDetails;