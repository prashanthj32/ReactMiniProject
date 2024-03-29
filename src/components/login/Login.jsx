import React, { useState } from "react";
import "./../../components/login/Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!inputFields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputFields.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!inputFields.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form submitted successfully", inputFields);
    }
  };

  return (
    <div className="bgpage">
      <h2 className="h2">Login</h2>
    <div className="login-form">
      <form onSubmit={handleSubmit}>
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
        <Button variant="contained" type="submit">
          Login
        </Button>
        <div>
          ----------------- OR --------------
          <div>
            <Button variant="text" component={Link} to="/forgotpassword">
              Forgot Password?
            </Button>
          </div>
          <div>
            Don't have an account?
            <Button variant="text" component={Link} to="/signup">
              Sign up
            </Button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
