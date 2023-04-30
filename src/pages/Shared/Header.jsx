import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Navbar} from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    return (
        <Container>
            <div className="text-center my-3">
                <img className='w-sm-100' src={logo} alt="" />
                <p className='text-secondary my-2'>
                    <small>Journalism Without Fear or Favour</small>
                </p>
                <p className='text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            <Navbar collapseOnSelect expand bg="light" variant="light" className='d-flex my-4'>
            {/* <div className='d-flex my-4'> */}
                <Button variant="danger">Trends</Button>
                <Marquee speed={100} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            {/* </div> */}
            </Navbar>
        </Container>
    );
}

export default Header;