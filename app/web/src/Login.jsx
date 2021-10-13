import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import Layout from './shared/Layout';

const Login = () => {
    const [invalid, setInvalid] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory ();
    const [login, setLogin] = useState ({
        email: '',
        password: '',
    });
    const {email, password} = login;

    //   handle change
    const handleChange = e => {
        const {name, value} = e.target;
        setLogin ({...login, [name]: value});
    };

    const LoginForm = e => {
        e.preventDefault ();

        fetch ('/api/login', {
            method: 'POST',
            body: JSON.stringify(login), // All form data
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then (response => response.json ())
        .then (response => {
            if (response.status === 'ok') {
                document.cookie = `uid=${response.data.id}; path=/ `; //store the id in a cookie named uid.
                /*
                const userId = userData.data.id;
                const key = 'uid';
                const value = encodeURIComponent(userId);
                document.cookie = `${key}=${value};path=/`;
                */
                history.push ('/');
            } else if (response.status !== 'ok') {
                setInvalid('Invalid email/password');
            }
        })
            .catch((error) => {
                // console.log(e)
                // setErrorMessage(error)
            });
    };

    return (
        <Layout>
            <div className="mx-auto w-75">
                <Form id="loginForm" onSubmit={LoginForm}>
                    <h1>Login</h1>
                    {invalid
                        ? <div id="alert" className="alert alert-danger">{invalid}</div>
                        : null}
                    {/* {errorMessage
                        ? <div id="alert" className="alert alert-danger">{errorMessage}</div>
                        : null} */}
                    <Form.Label className="form-label">Email address:</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        placeholder="Email address"
                        type="email"
                        value={email}
                        name="email"
                    />
                    <Form.Label className="form-label">Password:</Form.Label>
                    <Form.Control
                        value={password}
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />
                    <Button variant="primary" className="mt-4" type="submit" name="login">
                        Login
                    </Button>
                </Form>
            </div>
        </Layout>
    );
};

export default Login;