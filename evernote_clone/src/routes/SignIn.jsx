import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const firebase = useFirebase();
    const history = useHistory();

    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                history.push("/home");
            });
    };
    return (
        <div className="container">
        <div className="row">
            <div className="col s12 m4">
                <div className="card green darken-2"> 
                    <div className="card-content white-text">
                        <span className="card-title">Sign In</span>
                    </div>
                    <div className="card-action">
                        <button
                            onClick={(event) => {
                            event.preventDefault();
                            signInWithGoogle();
                            }}
                            className="waves-effect waves-light btn social google">
                        Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;