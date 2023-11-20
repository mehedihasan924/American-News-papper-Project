import { Button, Image } from 'react-bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from '../../../public/vite.svg'
import {FaRegBookmark , FaShareAlt, FaEye, FaRegStar, FaStar} from 'react-icons/fa'
import moment from 'moment';
import Rating from 'react-rating';
import SingNewsCard from '../SingleNewsCard/SingNewsCard';
const NewsCart = ({news}) => {
    const {_id, title, details,image_url,author, rating, total_view}=news
    return (
        <div>
            <Card className=" mb-3">
                <Card.Header className='d-flex gap-3 align-items-center '>
                 <Image src={img} roundedCircle />
                 <div className='flex-grow-1'>
                    <p className='mb-0'> {author?.name}</p>
                    <p><small>{moment(author?.published_date).format("yyyy-MM-D")}  </small></p>
                 </div>
                 <div>
                    <FaRegBookmark />  <FaShareAlt></FaShareAlt>
                 </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text >
                      {details.length < 250 ? <>{details}  </> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More </Link> </>}
                    </Card.Text>
                   <Link to={`/news/${_id}`}><Button variant="primary">Details Post</Button> </Link> 
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center ">
                 <span className='flex-grow-1 '> <Rating  placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning '></FaStar>}
                        fullSymbol={<FaStar ></FaStar>}></Rating>{rating.number}</span>
                  <span className=' d-flex align-items-center'><FaEye></FaEye> {total_view} </span>  
                </Card.Footer>
            </Card>     
        </div>
    );
};

export default NewsCart;