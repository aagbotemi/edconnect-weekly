

import React from 'react';
import {Button, Form, FormControl, FormLabel, Nav, Navbar} from 'react-bootstrap';

const Header = (props) => {

    return (
        <Navbar bg="primary" expand="lg" variant="dark full">
            <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
            <Navbar.Collapse>
                <Form inline name="searchForm">
                    <FormLabel className="sr-only">Search Projects:</FormLabel>
                    <FormControl type="text" name="searchForm" placeholder="Search Projects" />
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="/projects/submit">Projects</Nav.Link>
                </Nav>

                <Nav className="ml-auto">
                    {props.user ? 
                        (<>
                        <Nav.Link href="/logout" id="logout">Logout</Nav.Link>
                        <Navbar.Text id="username">{`Hi ${props.user.firstname}`}</Navbar.Text>
                        </>) : (<>
                        <Nav.Link href="/signup" id="signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login" id="login">Login</Nav.Link>
                        </>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;


/*
import React, {useState, useEffect} from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar
            id="header"
            bg="primary"
            variant="dark"
            className="justify-content-between"
        >
            <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
            <Navbar.Collapse>
                <Form inline className="d-flex">
                    <FormControl type="text" placeholder="Search Projects" />
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="/projects/">
                        Projects
                    </Nav.Link>

                    {/* <Nav.Link href={state ? '/projects/submit' : '/login'}>
                        Submit
                    </Nav.Link> *!/}
                </Nav>
                <Nav className="mr-auto">
                    {props.user ? 
                        (<>
                        <Nav.Link href="/logout" id="logout">Logout</Nav.Link>
                        <Navbar.Text id="username">{`Hi ${props.user.firstname}`}</Navbar.Text>
                        </>) : (<>
                        <Nav.Link href="/signup" id="signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login" id="login">Login</Nav.Link>
                        </>)
                    }
                    {/* {state
                        ? state &&
                            <Nav.Link id="logout" onClick={logout}>
                                Logout
                            </Nav.Link>
                        : <Nav.Link href="/signup">Sign Up</Nav.Link>
                    }

                    {state
                        ? state &&
                            <Nav.Link
                                id="username"
                                href={`/projects/${state.id}`}
                            >{`Hi, ${state.firstname}`}</Nav.Link>
                        : <Nav.Link href="/login">{login}</Nav.Link>
                    } *!/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;
*/