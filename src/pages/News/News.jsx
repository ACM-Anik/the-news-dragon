import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} className='p-3'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="danger"><FaArrowLeft></FaArrowLeft> All News In This Category</Button>
                </Card.Body>
            </Card>

            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;