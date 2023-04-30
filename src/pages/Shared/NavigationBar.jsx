import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <Container className='my-3'>
            <Navbar collapseOnSelect expand="lg"
                //  bg="light" 
                variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                           <NavLink className="navStyle" to="/category/0">Home</NavLink>

                            <NavLink className="navStyle" to="/about">About</NavLink>

                            <NavLink className="navStyle" to="/career">Career</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }} className='mx-2'></FaUserCircle>
                            }

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                    :
                                    <NavLink className="navStyle" to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;