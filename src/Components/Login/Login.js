import React, { useContext, useState } from 'react';
import firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebase.config';
import { loggedInUserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Button } from 'react-bootstrap';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    const [msg, setMsg] = useState({
        errorMsg: '',
        success: false
    })
    console.log(user)
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleBlur = (e) => {
        let isPassMatch;
        let pass;
        let confirmPass;
        let isFormValid = true;
        if (e.target.name === "name") {
            isFormValid = true;
        }
        if (e.target.name === "email") {
            isFormValid = true;
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
            console.log(pass)
        }
        if (e.target.name === "confirmPass") {
            // let confirmPass = e.target.value;
            // console.log(confirmPass)
            isFormValid = true;
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)

        }
    }
    const handleSubmit = (e) => {
        if (newUser) {
            if (user.password === user.confirmPass) {
                if (user.email && user.password) {
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then((userCredential) => {
                            const newMessage = { ...msg };
                            newMessage.success = true;
                            newMessage.errorMsg = '';
                            setMsg(newMessage);
                        })
                        .catch((error) => {
                            const newMessage = { ...msg };
                            newMessage.success = false;
                            newMessage.errorMsg = error.message;
                            setMsg(newMessage);
                        });
                }
            }
            else {
                const newMessage = { ...msg };
                newMessage.success = false;
                newMessage.errorMsg = "Password and Confirm Password did not match"
                setMsg(newMessage);
            }
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newMessage = { ...msg };
                    newMessage.success = true;
                    newMessage.errorMsg = '';
                    setMsg(newMessage);
                })
                .catch((error) => {
                    const newMessage = { ...msg };
                    newMessage.success = false;
                    newMessage.errorMsg = "Invalid user"
                    setMsg(newMessage);
                });
        }

        e.preventDefault();
    }
    console.log(msg)
    const handleGoogleSignIn = () => {
        // firebase.initializeApp(firebaseConfig)
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
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
        <div className=" m-5 ">
            <div className="row d-flex justify-content-center">
                <div className=" m-5 p-5 border">

                    <h1>Create an account </h1>
                    <p className="text-danger">{msg.errorMsg}</p>
                    {msg.success && <p className="text-success">User {newUser ? "created" : "Logged In" }  successfully </p>}
                    <br />
                    <form action="" onSubmit={handleSubmit} className="form-group">
                        {
                            newUser && <label htmlFor="name">Name</label>
                        }
                        {
                            newUser && <input type="text" className="form-control" onBlur={handleBlur} name="name" id="name" />
                        }

                        <label htmlFor="email">Username or Email</label>
                        <input type="email" className="form-control" onBlur={handleBlur} name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" onBlur={handleBlur} name="password" id="password" />

                        {
                            newUser && <label htmlFor="confirmPass">Confirm Password</label>
                        }
                        {
                            newUser && <input type="password" className="form-control" onBlur={handleBlur} name="confirmPass" id="confirmPass" />
                        }

                        <br />
                        <input type="submit" className="btn btn-primary btn-block  p-2" value="Create an account " />
                    </form>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="newUser" />
                    <p htmlFor="newUser">New User</p>
                </div>


            </div>

            <div ClassName=" row d-flex justify-content-center">

            </div>
            <div className="row d-flex justify-content-center m-2" >
                <h3 className="text-muted">------- Or -------</h3>
            </div>
            <div className="row d-flex justify-content-center" >

                <Button onClick={handleGoogleSignIn}> Login with Google</Button>
            </div>

        </div>
    );
};

export default Login;