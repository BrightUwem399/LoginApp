import React from "react";
import Image from "./Image/undraw.png"
import './LoginImage.css'

function LoginImage() {
    return (
        <div className="col-md-6 d-none d-md-block tc login-img">
            <img alt="pics" src={Image}></img>
            <h4>Make sure you log in to continue <span><i className="fa fa-code fa-bounce" aria-hidden="true"></i></span></h4>
        </div>
    )
}
export default LoginImage;