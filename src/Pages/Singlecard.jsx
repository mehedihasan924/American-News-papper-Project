import { Button } from 'bootstrap';
import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Singlecard = ({newsData}) => {

    const {_id, title, details,image_url,author, rating, total_view}=newsData
    return (
      
           <div  className='mt-5 '>     
              <img className='w-100' src={image_url} alt="" />
              <h6> {title}</h6>
              <p> {details.length < 100 ? <>{details}  </> : <>{details.slice(0, 80)}...<Link to={`/news/${_id}`}>Read More </Link> </>}</p>
           </div>
       
    );
};

export default Singlecard;