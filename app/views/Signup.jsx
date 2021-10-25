import React from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import Layout from './shared/Layout';

const Signup = ({ props1, props2, props3, user }) => {
 
    return (
        <Layout user={user}>
            <main className="mx-auto w-50 p-3">
            <h1>Signup</h1>
            <Form id="signupForm" action="signup" method="POST"> 
                {props3.length > 0 && (
                  <Alert variant="danger">
                    {props3.map((anyAlert) => { return <> {anyAlert} <br/></>})}
                  </Alert>)}
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label for="firstname">First Name:</Form.Label>
                        <Form.Control type="text" id="firstname" name="firstname" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Label for="lastname">Last Name:</Form.Label>
                        <Form.Control type="text" id ="lastname" name="lastname" placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label for="email">Email Address:</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Your Email Address" />
                    </Col>
                    <Col>
                        <Form.Label for="password">Password:</Form.Label>
                        <Form.Control type="password" id="password" name="password" placeholder="Your password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Label for="program">Program:</Form.Label>
                        <Form.Control as="select" name="program" id="program">
                            <option>Select Program</option>
                            {props1.map((program) => <option key={program}>{program}</option>)}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label for="matricNumber">Matric Number:</Form.Label>
                        <Form.Control type="text" id="matricNumber" name="matricNumber" placeholder="16/2020" />
                    </Col>
                    <Col>
                        <Form.Label for="graduationYear">Graduation Year:</Form.Label>
                        <Form.Control as="select" name="graduationYear" id="graduationYear">
                            <option>Select Graduation Year</option>
                            {props2.map((gradYear) => <option key={gradYear}>{gradYear}</option>)}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">Sign Up</Button>
            </Form> <br/>
            </main>
        </Layout>
    )
}

export default Signup;

/*import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap';
import Layout from './shared/Layout';

const Signup = ({ school, gradYears, error, user}) => {

    return (
        <Layout>
            <Form method="POST" action="signup" id="signupForm">
                <div id="containerlogin">
                    <h1>Sign Up</h1>
                    {error
                        ? <div>
                            <div className="alert alert-danger">
                            {error.length > 0 &&
                                error.map ((err, index) => (
                                <>
                                <strong key={index}>{err}</strong>< br/></>
                                ))}
                            </div>
                        </div>
                        : null}
                <Row>
                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Your First Name"
                        name="firstname"
                        id="yourfirstname"
                        value={firstname}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Your Last Name"
                        name="lastname"
                        id="yourlastname"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                        type="email"
                        placeholder="Your Email Address"
                        name="email"
                        id="yourEmailAddress"
                        />
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Select programs</Form.Label>
                        <Form.Control
                        as="select"
                        id={'language'}
                        name="program"
                        >
                        {school &&
                            school.map ((value, index) => (
                            <option key={index}>{value}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Graduation year</Form.Label>
                        <Form.Control
                        as="select"
                        name="graduationYear"
                        id="graduationYear"
                        className="form-control"
                        >
                        {gradYears &&
                            gradYears.map((value, index) => (
                            <option key={index}>{value}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>

                        <Form.Control
                        name="password"
                        type="password"
                        placeholder="Your Password"
                        id="password"
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Matriculation Number</Form.Label>

                        <Form.Control
                        name="matricNumber"
                        placeholder="e.g 10/2020"
                        className="form-control"
                        type="text"
                        id="matricNumber"
                        />
                    </Form.Group>

                    </Col>
                </Row>

                <div className="text-left">
                    <Button
                    type="submit"
                    onClick={signup}
                    variant="primary"
                    className="mb-4"
                    id="signUpButton"
                    >
                    Sign Up
                    </Button>
                </div>
                </div>
            </Form>
        </Layout>
    );
};

export default Signup;
*/