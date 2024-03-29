import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './ForgotPassword.css'

function ForgotPassword() {
    const [forgotPassword, setForgotPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleUserName = (event) => {
        setForgotPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!forgotPassword.trim()) {
            newErrors.email = "Email or Phone number is required";
        } else if (!/\S+@\S+\.\S+/.test(forgotPassword)) {
            newErrors.email = "Email is invalid";
        } if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("submitted successfully", forgotPassword);
        }
    }

    return (
        <div className='bgpage'>
             <h2 className='h2'>Trouble logging in?</h2>
           
        <div className="forgot-password">
        {/* <h6>Enter your email, phone and we'll</h6>
            <h6> send you a link to get back into your account.</h6> */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <TextField
                        id="userName"
                        label="Email,Phone"
                        value={forgotPassword}
                        onChange={handleUserName}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit">
                        Send login link
                    </Button>
                </div>
                ----------------- OR --------------
                <div>
                    <Button variant="text" component={Link} to="/signup">
                        Create new account?
                    </Button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ForgotPassword
