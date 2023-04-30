import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className='text-center'>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    if (user) {
        return children;
    }
    //set the state value we have to use location of which page we want to go
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;

/**
 * ------------------
 *      Steps
 * ------------------
 * 
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private router
 * 5. Handle loading
 * 
 * */ 