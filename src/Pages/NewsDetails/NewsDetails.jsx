import Button from 'react-bootstrap/Button';
import React, { useEffect, useState,useContext } from 'react';
import { Card, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvaiders';
import Singlecard from '../Singlecard';


const NewsDetails = () => {

 const news=useLoaderData()
    const { title, details,image_url, category_id}=news;
  
    console.log(news);
//Masum Vai use context
    const {data , setData ,user}  = useContext(AuthContext)
    console.log({data},'from newsdetails')

  //   useEffect(()=>{
  //   fetch("http://localhost:3000/news")
  //   .then(res=>res.json())
  //   .then(data => setData(data))
  //   },[] )
  //  console.log(data);


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
       
      <Row className='d-flex  flex-row ' lg={3} length={3}>
        {/* {
             data.slice( 0,3).map((news)=> <Singlecard key={news.id}
          newsData={news}
          >     
            </Singlecard> ) 
        } */}
       </Row>
    
      </div>  
    );
};

export default NewsDetails;