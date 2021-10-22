import React, { useState } from 'react'
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
                        id="yourFirstName"
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
                        id="yourLastName"
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