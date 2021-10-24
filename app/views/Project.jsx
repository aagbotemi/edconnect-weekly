import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Layout from './shared/Layout';

const Project = (props) => {
console.log(props)
    return (
        <Layout user={props.user}>
            <main> <br /><br />
                <Container>
                    <Row>
                        <h3 id="project_name"><strong>{props.props1.name}</strong></h3>
                    </Row>
                    <Row className="bg-light p-3">
                        <Col>
                            <p>Created By</p>
                            <p id="project_author">{`${props.props2.firstname} ${props.props2.lastname}`}</p>
                        </Col>
                        <Col>
                            <p>Date Created</p>
                            <p>2020-08-30</p>
                        </Col>
                        <Col>
                            <p>Last Updated</p>
                            <p>2020-08-30</p>
                        </Col>
                        <Col className="mx-auto justify-content-end">
                            <Button href="/createproject" variant="primary" size="lg">Edit Project</Button>
                        </Col>
                    </Row>
                </Container><br />
            
                <Container>
                    <Row>
                        <Col>
                            <h3>Project Abstract</h3>
                            <hr className="solid" />
                            <p id="project_abstract">{props.props1.abstract}</p><br/><br/>
                            <Form name="projectComment"> 
                                <Form.Group>
                                    <Form.Label><strong>Comments:</strong></Form.Label>
                                    <Form.Control as="textarea" name="comments" rows={4} cols={50} placeholder="Leave a comment" />
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                            <hr className="solid" />
                            <p align="center">No comments added yet</p>
                        </Col>
                        <Col>
                            <h3>Project details</h3>
                            <hr className="solid" />
                            <InputGroup>
                                <Form.File id="custom-file" label="Custom file input" custom />
                                <InputGroup.Append>
                                    <Button variant="primary" type="button" name="projectFile">Upload</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <hr className="solid" />
                            <Card>
                                <Card.Header>
                                    Author(s)
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text><p align="center" id="project_authors">{props.props1.authors}</p></Card.Text>
                                </Card.Body>
                                <Card.Footer id="project_tags">
                                    {props.props1.tags}
                                </Card.Footer>
                            </Card><br/>
                            <Card>
                                <Card.Header>
                                    Project files
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text><p align="center">No files uploaded yet</p></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </main><br/>
        </Layout>
    )
}

export default Project;


/*
import React, {useState, useEffect} from 'react';
import Layout from './shared/Layout';

const Project = (props) => {

  return (
    <Layout user={props.user}>
      <div>
        
          <div>
            <section name="project" className="container mt-4 mb-5">

              <h1 id="project_name">

                {props.props1.name}
              </h1>
              <div className="row bg-light text-secondary">
                <div className="col p-3 d-flex align-items-center">
                  <p>
                    <strong>
                      Created By: <br />
                    </strong>

                      <strong id="project_author">
                        {`${props.props2.firstname} ${props.props2.lastname}`}
                      </strong>
                  </p>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <p><strong>Date Created: <br /> 2020/08/30</strong></p>
                </div>
                <div className="col p-3 d-flex align-items-center">
                  <p><strong>Last Updated: <br /> 2020/08/30</strong></p>
                </div>
                <div className="col p-3 d-flex align-items-center justify-content-end">
                  <a href="/createproject" className="btn btn-primary" type="viewProject">
                    Edit Project
                  </a>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <h5>Project Abstract</h5>
                  <hr />
                  <p id="project_abstract">{props.props1.abstract}</p>
                  <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment"
                      name="comments"
                    />
                  </div>
                  <button className="btn btn-primary">Submit</button>
                  <hr />
                  <p className="text-center d-flex align-items-center justify-content-center py-2">
                    No comments added yet
                  </p>
                </div>
                <div className="col-6">
                  <h5>Project Details</h5>
                  <div className="card">
                    <div className="card-header">
                      <strong>Author(s)</strong>
                    </div>
                    <p
                      id="project_authors"
                      className="card-text py-2 px-3 text-align-center"
                    >
                    {props.props1.authors}
                      {/* {projects.authors &&
                        projects.authors.map (author => (
                          <strong key={author}>{author}</strong>
                        ))} *!/}

                    </p>
                  </div>
                  <div className="card">
                    <div id="project_tags" className="card-header">
                    {props.props1.tags}
                      {/* {projects.tags &&
                        projects.tags.map (tag => (
                          <strong key={tag}>{tag}</strong>
                        ))} *!/}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <strong>Project Files</strong>
                    </div>
                    <p className="card-text d-flex align-items-center justify-content-center p-3 ">
                      No files uploaded yet
                    </p>
                  </div>
                </div>
              </div>

            </section>
          </div>
      </div>
    </Layout>
  );
};

export default Project;
*/