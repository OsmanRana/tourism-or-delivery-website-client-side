import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';



const Login = () => {
    const history = useHistory();

    const { handleGoogleSignIn, user } = useFirebase();
    const handleSignIn = () => {
        handleGoogleSignIn();

    }
    return (
        <div className="container my-5">
            <Link to='/home'><img className="img-fluid mx-auto d-block w-25" src="/Group 1329.png" alt="" /></Link>
            <div className=" shadow my-5 text-center p-5 login-box border rounded-3">
                <h3 className="m-5">Login with</h3>
                <span onClick={handleSignIn} className="p-3 m-3 border rounded-pill d-block btn"><img className="img-fluid" src="./google.png" alt="" />Continue with Google</span>
                <p className="m-5 text-primary">Please Sign In with Google</p>
                {
                    user.email && history.push('/home')

                }
            </div>

        </div>
    );
};

export default Login;