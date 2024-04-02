import React from "react";
import "./../../components/login/Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
  };

  return (
    <div className="bgpage">
      <h2 className="loginbg">Login</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <div className="input-container">
            <TextField
              label="Email"
              id="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
            />
            {errors.email && (
              <span className="errmessage">{errors.email.message}</span>
            )}
          </div>
          <div className="input-container">
            <TextField
              label="Password"
              id="password"
              {...register("password", {
                required: "required",
                minLength: {
                  value: 5,
                  message: "min length is 5",
                },
              })}
              type="password"
            />
            {errors.password && (
              <span className="errmessage">{errors.password.message}</span>
            )}
          </div>
          </div>
          <div>
          <Button variant="contained" type="submit">
            Login
          </Button>
          </div>
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
