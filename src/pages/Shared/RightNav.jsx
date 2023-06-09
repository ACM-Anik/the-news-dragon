import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from './QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mb-4'>Login With </h2>
            <Button variant="outline-primary" className='mb-2 w-100'><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary" className=' w-100'><FaGithub /> Login With Github</Button>
            <div className='my-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className='w-100' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;