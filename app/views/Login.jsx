import React, { useState } from 'react';
import { Alert, Button, Form, Row } from 'react-bootstrap';
import Layout from './shared/Layout';

const Login = ({ props, user }) => {
 
    return (
        <Layout user={user}>
            <main className="mx-auto w-50 p-3">
              <h1>Login</h1>
              <Form id="loginForm" className="w-40 p-3" action="login" method="POST">
                    {props.length > 0 && (<Alert variant="danger">{props.map((anyAlert) => { return <> {anyAlert} <br/></>})}</Alert>)}
                    <Form.Group as={Row}>
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control type="email" name="email" /> <br /><br />
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
              </Form>    
            </main><br/>
        </Layout>
    )
}

export default Login;

/*
import React, {useState} from 'react';
import { Alert, Form, Button} from 'react-bootstrap';
import Layout from './shared/Layout';

const Login = ({ props, user }) => {

    return (
        <Layout user={user}>
            <div className="mx-auto w-75">
                <Form id="loginForm"  action="login" method="POST">
                    <h1>Login</h1>
                    {props.length > 0 && (<Alert variant="danger">{props.map((anyAlert) => { return <> {anyAlert} <br/></>})}</Alert>)}
                    {/* {invalid
                        ? <div id="alert" className="alert alert-danger">{invalid}</div>
                        : null} *!/}
                    {/* {errorMessage
                        ? <div id="alert" className="alert alert-danger">{errorMessage}</div>
                        : null} *!/}
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
*/