import React from 'react';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Shered/LefatNav/LeftNav';
import RightNav from '../Shered/RightNav/RightNav';
import {Outlet} from 'react-router-dom'
import Navigationbar from '../Shered/Navigationbar/Navigationbar';
import useTitle from '../hooks/useTitle';


const Main = () => {
    useTitle("Home")
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
            <Container>
                <Row>
                    <Col lg={3}> 
                     <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
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

export default Main;