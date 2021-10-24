import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import Layout from './shared/Layout';

const CreateProject = ({ props, user }) => {

    return(
        <Layout user={user}>
          <main class="mx-auto w-50 p-3">
            <h3>Submit Project</h3>
            <Form name="submitProject" id="createProjectForm" action="/projects/submit" method="POST"> 
                  {props.length > 0 && (
                  <Alert variant="danger">
                    {props.map((anyAlert) => { return <> {anyAlert} <br/></>})}
                  </Alert>)}
                  <Form.Group>
                    <Form.Label for="name" class="form-label">Project Name:</Form.Label>
                    <Form.Control type="text" id="name" name="name" placeholder="Enter project name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="abstract" class="form-label">Project Abstract:</Form.Label>
                    <Form.Control as="textarea" id="abstract" name="abstract" rows={4} cols={100} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="authors" class="form-label">Author(s):</Form.Label>
                    <Form.Control type="text" id="authors" name="authors" placeholder="Enter author names (seperated by comma)" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="tags" class="form-label">Tag(s):</Form.Label>
                    <Form.Control type="text" id="tags" name="tags" placeholder="Use # to tag project with different topics" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Continue</Button>
            </Form>
        </main><br></br>
        </Layout>
    )
}

export default CreateProject;

/*
import React, {useState } from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';
import Layout from './shared/Layout';

const CreateProject = ({ props, user }) => {

    return(  
        <Layout user={user}>
            <section name="search" className="container mb-5 mt-4 mx-auto w-75">
                {error
                    ? <div>
                        <div className="alert alert-danger">
                            {props.length > 0 &&
                            props.map ((err, index) => (
                                <>
                                <strong key={index}>{err}</strong>< br/></>
                            ))}
                        </div>
                    </div>
                    : null}
                <div>
                    <h3><strong>Submit Project</strong></h3>
                </div>
                <Form
                    id="createProjectForm"
                    className="form-row"
                    action="/projects/submit"
                    method="POST"
                    name="submitProject"
                >
                    <Form.Label htmlFor="name">Project Name:</Form.Label>

                    <FormControl
                    type="text"
                    name="name"
                    id="name"
                    placehoder="Enter project name"
                    />

                    <Form.Label htmlFor="abstract">Project Abstract:</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="abstract"
                    rows={3}
                    />
                    <Form.Label htmlFor="authors">Authors:</Form.Label>
                    <FormControl
                    type="text"
                    id="authors"
                    name="authors"
                    placeholder="enter author name separated by comma"
                    />
                    <Form.Label>Tag(s):</Form.Label>
                    <FormControl
                    type="text"
                    name="tags"
                    id="tags"
                    placeholder="use # to tag project with different topics (eg #javascript, #mongodb, etc)"
                    />

                    <Button variant="primary" className="mt-4" type="submit">
                    Continue
                    </Button>
                </Form>
            </section>
        </Layout>
    )
}

export default CreateProject;
*/
