import React, { useContext } from 'react';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebase.config';
import { loggedInUserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => { 
        // firebase.initializeApp(firebaseConfig)
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div>
            <h3>This is Login</h3>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;