import React, { useState } from 'react';
import './Login.css';
import InputField from '../inputField/InputField';
import Button from '../button/Button';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUserName = (event) => {
        const newValue = event.target.value;
        if (newValue === "") {
            setErrorMessage("Field is empty");
        } else {
            setErrorMessage("");
        }

        setUsername(newValue);
    }

    const handlePassword = (event) => {
        const newValue = event.target.value;
        if (newValue === "") {
            setErrorMessage("Field is empty");
        } else {
            setErrorMessage("");
        }

        setPassword(newValue);
    }

    const handleOnClick = () => {
        console.log("fuck you");
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
                    <InputField placeholder="username" />
                    <InputField placeholder="password" />
                </div>
                <Button type="button" value="Log-in" onClick={handleOnClick} />
            </div>
        </main>
        <footer>

        </footer>

    </>
    )
}

export default Login;