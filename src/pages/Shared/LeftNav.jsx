import React, { useEffect, useState } from 'react';
import { Card, Col, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
 
const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-acm-anik.vercel.app/categories')
            // fetch('https://raw.githubusercontent.com/ACM-Anik/the-dragon-news-server/b0280497a464e4fc00705fb82d3d8fe0e832f7f0/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <h2 className='mb-4'>All Categories</h2>
            <div className='ps-4'>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='text-decoration-none'>
                                {category.name}
                            </Link>
                        </p>)
                }
            </div>

            <Row xs={1} className="g-4 my-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;