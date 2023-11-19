import React from 'react';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../Shered/RightNav/RightNav';
import {Outlet} from 'react-router-dom'
const NewsFeed = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>          
                <Col lg={9}>
                 <Outlet></Outlet>
                </Col>
                <Col lg={3}>

                <RightNav> </RightNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default NewsFeed;
