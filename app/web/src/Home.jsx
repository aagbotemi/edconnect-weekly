import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Jumbotron} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './shared/Layout';
import {Link} from 'react-router-dom';
const Home = () => {
    const [state, setState] = useState([]);
    
    useEffect (() => {
        fetch ('/api/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then (response => response.json())
        .then (response => setState(response));
    }, []);

    return (
        <Layout>
            <Jumbotron>
                <h1>Welcome to Project Explorer</h1>
                <p>
                Project Explorer is a repository for filan year projects across all
                departments at your institution. you can submit oyur project and
                search projects submited by others to learn from.
                </p>
                <div>
                    <Button href="/signup" variant="primary" className="mr-4">
                        Get Started
                    </Button>
                    <Button href="/login" variant="secondary">
                        Login
                    </Button>
                </div>
            </Jumbotron>
            <Container>
                <Row className="showcase">
                    {state &&
                        state.slice(0, 4).map((project, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <Link to={`/projects/${project.id}`}>
                                                    {project.name}
                                                </Link>
                                                {' '}
                                            </h5>
                                            <div>
                                                {project.authors.map(author => (
                                                    <h6
                                                        className="card-subtitle mb-2 text-muted"
                                                        key={author}
                                                    >
                                                        {author}
                                                    </h6>
                                                ))}
                                            </div>
                                            <p className="card-text">
                                                {project.abstract}
                                            </p>
                                            <div>
                                                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Row>
            </Container>
        </Layout>
    );
};

export default Home;