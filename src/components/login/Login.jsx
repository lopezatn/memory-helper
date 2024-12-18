import React, { useState } from "react";
import "./Login.css";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import login from "../../clients/loginClient";
import Navigation from "../../routes/Navigation";
import { login as reduxLogin } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleUserName = (event) => {
    setUsername(event.target.value);
    setErrorMessage("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitLogin();
    }
  };

  const submitLogin = () => {
    if (username === "") {
      setErrorMessage("Username is empty");
    } else if (password === "") {
      setErrorMessage("Password is empty");
    } else {
      const result = login(username, password);
      if (result) {
        dispatch(reduxLogin(result));
        redirect("/reminders");
      } else {
        setErrorMessage("Username or Password is incorrect");
      }
    }
  };

  return (
    <>
            <Navigation />
      <main>
        <div className="container text-center">
          Please Log-in to proceed
          <div className="row">
            <InputField
              placeholder="username"
              onKeyDown={handleKeyDown}
              onChange={handleUserName}
            />
            <InputField
              placeholder="password"
              onKeyDown={handleKeyDown}
              onChange={handlePassword}
            />
            <label className="errorMessage">{errorMessage}</label>
          </div>
          <Button
            className="btn btn-outline-primary"
            type="button"
            value="Log-in"
            onClick={submitLogin}
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
