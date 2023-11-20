import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const Singlecard = () => {
    return (
        <div>
              <Row xs={1} md={3} lg={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col
                key={idx}>
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}

          
    </Row>
        </div>
    );
};

export default Singlecard;