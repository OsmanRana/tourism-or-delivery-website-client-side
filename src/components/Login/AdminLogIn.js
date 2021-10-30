import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'



const AdminLogin = () => {
    const history = useHistory();
    const { handleGoogleSignIn, user } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/admindashboard';

    const handleGoogleLogIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="container my-5">

            <div className=" shadow my-5 text-center p-5 login-box border rounded-3">
                <h3 className="m-5 text-primary">Log In as an Admin here</h3>
                <span onClick={handleGoogleLogIn} className="p-3 m-3 border rounded-pill d-block btn"><img className="img-fluid" src="./google.png" alt="" />Continue with Google</span>
                <p className="m-5 text-primary">Please Sign In with Google</p>
                {
                    user.email && history.push('/home')

                }
            </div>

        </div>
    );
};

export default AdminLogin;