import { Button, Image } from 'react-bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from '../../../public/vite.svg'
import {FaRegBookmark , FaShareAlt} from 'react-icons/fa'
import moment from 'moment';
const NewsCart = ({news}) => {
    const {_id, title, details,image_url,author  }=news
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;