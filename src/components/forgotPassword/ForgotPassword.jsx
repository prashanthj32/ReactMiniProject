import { TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bgpage">
      <h2 className="forgotbg">Trouble logging in?</h2>

      <div className="forgot-password">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField label="Email"
              id="name"
              {...register("email", { required: true, maxLength: 30 })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="errmessage">Email is required</span>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <span className="errmessage">Max length exceeded</span>
            )}
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
  );
}

export default ForgotPassword;
