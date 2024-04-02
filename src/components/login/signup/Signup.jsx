import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import "./../../login/signup/Signup.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bgpage">
      <h2 className="signupbg">Sign up</h2>
      <div className="signup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="input-container">
              <TextField
                label="Name"
                id="name"
                {...register("name", {
                  required: "required",
                  pattern: {
                    message: "Name is required",
                  },
                })}
                type="text"
              />
              {errors.name && (
                <span className="errmessage">{errors.name.message}</span>
              )}
            </div>
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
                label="Phone Number"
                id="phonenumber"
                {...register("phonenumber", {
                  required: "required",
                  pattern: {
                    value: "[0-9]{10}",
                    message: "Number not valid",
                  },
                })}
                type="number"
              />
              {errors.phonenumber && (
                <span className="errmessage">{errors.phonenumber.message}</span>
              )}
            </div>
            <div className="input-container">
              <TextField
                label="Password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span className="errmessage">{errors.password.message}</span>
              )}
            </div>
            <div className="input-container">
              <TextField
                label="Confirm Password"
                id="confirmpassword"
                {...register("confirmpassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
                type="password"
              />
              {errors.confirmpassword && (
                <span className="errmessage">
                  {errors.confirmpassword.message}
                </span>
              )}
            </div>
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
}

export default Signup;
