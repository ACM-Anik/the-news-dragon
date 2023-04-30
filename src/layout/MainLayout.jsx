import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav';
import LeftNav from '../pages/Shared/LeftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar';


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;