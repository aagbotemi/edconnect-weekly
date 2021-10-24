import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from './shared/Layout';

const Home = (props) => {

    return (
        <Layout user={props.user}>
            <main className="mx-auto">
                <Jumbotron>
                    <h1>Project Explorer</h1>
                    <p>Project Explorer is a repository for final year projects across all departments at your institution. You can submit your project and search projects submitted by others to learn from.</p>
                    <Button variant="primary" href="/signup" className="mr-2">Get Started</Button>
                    <Button variant="secondary" href="/login">Login</Button>
                </Jumbotron>

                <Container>
                    <Row className="showcase justify-content-between">
                        {props.project.reverse().slice(0,4).map(project => <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><a href={`/project/${project.id}`}>{project.name}</a></Card.Title>
                                    <Card.Subtitle>{project.authors}</Card.Subtitle>
                                    <Card.Text>{project.abstract}</Card.Text>
                                    <Card.Footer>{project.tags}</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>)}
                    </Row>
                </Container><br/><br/>
            </main>
        </Layout>
    )
}

export default Home;

/*
import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Jumbotron, Col, Card} from 'react-bootstrap';
import Layout from './shared/Layout';

const Home = (props) => {
    
    return (
        <Layout user={props.user}>
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
                    {props.project &&
                        props.project.reverse().slice(0, 4).map((project, index) => {
                            return (
                                <Col className="col-3" key={index}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                <a href={`/projects/${project.id}`}>
                                                    {project.name}
                                                </a>
                                                {' '}
                                            </Card.Title>
                                            <Card.Subtitle>
                                                {project.authors}
                                                {/* {project.authors.map(author => (
                                                    <h6
                                                        className="card-subtitle mb-2 text-muted"
                                                        key={author}
                                                    >
                                                        {author}
                                                    </h6>
                                                ))} *!/}
                                            </Card.Subtitle>
                                            <Card.Text>
                                                {project.abstract}
                                            </Card.Text>
                                            <Card.Footer>
                                                {/* {project.tags.map(tag => <span key={tag}>{tag}</span>)} *!/}
                                                {project.tags}
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </Layout>
    );
};

export default Home;

*/