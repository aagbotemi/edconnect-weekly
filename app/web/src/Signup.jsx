import React, {useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import {Form, Row, Col, Button} from 'react-bootstrap';
import Layout from './shared/Layout';
// import Cookies from 'universal-cookie';

const Signup = () => {
    const [programs, setPrograms] = useState ([]);
    const [graduationYears, setGraduationYears] = useState ([]);
    const [regInfo, setRegInfo] = useState ({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        matricNumber: '',
        program: '',
        graduationYear: '',
    });
    const [error, setError] = useState('');
    
    useEffect(() => {
        fetch ('/api/programs', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(response => setPrograms(response));
    }, []);
    
    useEffect(() => {
        fetch ('/api/graduationYears', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(response => setGraduationYears(response));
    }, []);

    let history = useHistory ();
    const signup = e => {
        e.preventDefault ();
        fetch ('/api/register', {
            method: 'POST',
            body: JSON.stringify(regInfo),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then (response => response.json())
        .then (res => {
            console.log (res);
            if (res.status === 'ok') {
                document.cookie = `uid=${res.data.id}; path=/`; // store the id in a cookie named uid.
                    // const userCookie = new Cookies()
                    // const userId = res.data.id;
                    // const key = 'uid';
                    // const value = encodeURIComponent(userId);
                    // userCookie.set(key, value, {path: '/'});
                history.push ('/');
                // setError ('');
            } else if (res.status !== 'ok') {
                // step 4 [3d]
                setError (res.errors);
            }
        });
    };

    const {
        firstname,
        lastname,
        email,
        password,
        matricNumber,
        program,
        graduationYear,
    } = regInfo;

    const handleChange = e => {
        const {name, value} = e.target;
        setRegInfo ({...regInfo, [name]: value});
    };

    useEffect (() => {
        const errorTimer = setTimeout (() => {
            setError ('');
        }, 3000);
        return () => clearTimeout(errorTimer);
    }, [error]);

    return (
        <Layout>
            <Form id="signupForm">
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
                        value={lastname}
                        onChange={handleChange}
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
                        value={email}
                        onChange={handleChange}
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
                        value={program}
                        onChange={handleChange}
                        >
                        {programs &&
                            programs.map ((value, index) => (
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
                        value={graduationYear}
                        id="graduationYear"
                        className="form-control"
                        onChange={handleChange}
                        >
                        {graduationYears &&
                            graduationYears.map((value, index) => (
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
                        value={password}
                        onChange={handleChange}
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
                        value={matricNumber}
                        placeholder="e.g 10/2020"
                        className="form-control"
                        onChange={handleChange}
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