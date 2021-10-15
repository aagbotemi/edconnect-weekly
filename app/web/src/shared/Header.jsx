import React, {useState, useEffect} from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import {useHistory} from 'react-router';

const Header = () => {
    const [state, setState] = useState ('');
    const [login] = useState('Login');
    const history = useHistory ();

    const logout = e => {
        e.preventDefault ();
        document.cookie = `uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        history.push ('/');
        setState ('');
    };

    useEffect (() => {
        if (document.cookie) {
            let cookieValue = document.cookie.split('=');
            const uid = cookieValue[1];

            fetch (`/api/users/${uid}`, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
                .then (result => result.json())
                .then (res => setState(res));
        }
    }, []);

    return (
        <Navbar
            id="header"
            bg="primary"
            variant="dark"
            className="justify-content-between"
        >
            <Nav>
                <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
                <Form inline className="d-flex">
                    <FormControl type="text" placeholder="Search Projects" />
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/projects/">
                        Projects
                    </Nav.Link>

                    <Nav.Link href={state ? '/projects/submit' : '/login'}>
                        Submit
                    </Nav.Link>
                </Nav>
            </Nav>
            <Nav className="d-flex justify-content-end">
                {state
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
                }
            </Nav>

        </Navbar>
    );
};
export default Header;