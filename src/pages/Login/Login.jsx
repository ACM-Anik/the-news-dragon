import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login page location', location);
    const from = location.state?.from?.pathname || '/category/0';


    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser);
                navigate(from, {replace: true});
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error)
                console.log(error);
            })
    }


    return (
        <Container className='w-50 mx-auto'>
            <h2>Please Login</h2>

            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>

                <br />

                {success &&
                    <Form.Text className="text-success">
                        LogIn successfully done!
                    </Form.Text>
                }

                {error &&
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                }

            </Form>
        </Container>
    );
};

export default Login;