import { Button, Image } from 'react-bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from '../../../public/vite.svg'
const NewsCart = ({news}) => {
    const {_id, title, details,image_url,  }=news
    return (
        <div>
            <Card className="text-center mb-3">
                <Card.Header>
                <Image src={img} roundedCircle />
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