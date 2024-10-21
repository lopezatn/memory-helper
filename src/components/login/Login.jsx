import React, { useState } from 'react';
import './Login.css';
import InputField from '../inputField/InputField';
import Button from '../button/Button';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const handleUserName = (event) => {
        const newValue = event.target.value;
        setUsername(newValue);
    }



    return (
    <body>
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Memory Helper</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Reminders</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Create Reminder</a>
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
                <Button type="button" value="Log-in" />

            </div>
        </main>
        <footer>

        </footer>

    </body>
    )
}

export default Login;