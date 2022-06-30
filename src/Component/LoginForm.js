import React, { useState } from "react";
import './LoginForm.css';

function LoginForm({ onSubmit, name, onChange }) {

    const [passwordType, setPasswordType] = useState("password")
    const [passwordInput, setPasswordInput] = useState("")
    const handlePassword = (event) => {
        setPasswordInput(event.target.value)
    }
    const togglePassword = (e) => {
        e.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <div className="col-md-6 tc login-form">
            <h4><b>WELCOME!</b></h4>
            <form className="" onSubmit={onSubmit}>
                <div className="inp">
                    <input
                        placeholder="Username"
                        type='text'
                        name='userName'
                        id='userName'
                        onChange={onChange}
                        value={name}
                        className="input col-md-9 col-10"
                        maxLength="20"
                        required />
                </div>
                <div className="inp d-flex">
                    <input
                        placeholder="Email"
                        type='email'
                        className="input col-md-9 col-10"
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                        required />

                </div>
                <div className="inp">
                    <input
                        placeholder="Password"
                        type={passwordType}
                        name='password'
                        onChange={handlePassword}
                        value={passwordInput}
                        className="input col-md-9 col-10"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        required />
                </div>
                <span className="btn" onClick={togglePassword} style={{ border: 'none', background: 'transparent' }}>{passwordType === "password" ? <i style={{ color: 'grey' }} className="fa-solid fa-eye-slash ms-2"></i> : <i style={{ color: 'grey' }} className="fa-solid fa-eye ms-2"></i>}</span>
                <div className="inp">
                    <button type="submit" className=""> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;