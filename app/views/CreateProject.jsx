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
    : null)
}

export default CreateProject;