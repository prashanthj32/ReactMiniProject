import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import './Signup.css'


const SignupForm = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!inputFields.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!inputFields.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(inputFields.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!inputFields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputFields.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!inputFields.password.trim()) {
      newErrors.password = "Password is required";
    } else if (inputFields.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!inputFields.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (inputFields.confirmPassword !== inputFields.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="bgpage">
        <h2 className="h2">Sign up</h2>
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            type="text"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
            label="Name"
          />
        </div>
        <div className="form-group">
          <TextField
            type="text"
            name="phoneNumber"
            value={inputFields.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber ? true : false}
            helperText={errors.phoneNumber}
            label="Phone Number"
          />
        </div>
        <div className="form-group">
          <TextField
            type="email"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
            label="Email"
          />
        </div>
        <div className="form-group">
          <TextField
            type="password"
            name="password"
            value={inputFields.password}
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
            label="Password"
          />
        </div>
        <div className="form-group">
          <TextField
            type="password"
            name="confirmPassword"
            value={inputFields.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
            label="Confirm Password"
          />
        </div>
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
        <div>
          Already have an account?
          <Button variant="text" component={Link} to="/login">
            Login
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
