import React, { useState } from 'react';
import './Login.css';
import InputField from '../inputField/InputField';
import Button from '../button/Button';
import login from '../../clients/loginClient';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUserName = (event) => {
        setUsername(event.target.value);
        setErrorMessage("");
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        setErrorMessage("");
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            submitLogin();
        }
    }

    const submitLogin = () => {
        if (username === "") {
            setErrorMessage("Username is empty");
        } else if (password === "") {
            setErrorMessage("Password is empty");
        } else {
            const result = login(username, password);
            if (result) {
                console.log(result);
            }
            else {
                console.log("Result is undefined");
            }
        }
    }

    return (
    <>
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Memory Helper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Reminders</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Create Reminder</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
        <main>
            <div className='container text-center'>
                Please Log-in to proceed
                <div className='row'>
                    <InputField placeholder="username" onKeyDown={handleKeyDown} onChange={handleUserName}/>
                    <InputField placeholder="password" onKeyDown={handleKeyDown} onChange={handlePassword}/>
                    <label className="errorMessage">
                        {errorMessage}
                    </label>
                </div>
                <Button type="button" value="Log-in" onClick={submitLogin} />
            </div>
        </main>
        <footer>

        </footer>

    </>
    )
}

export default Login;