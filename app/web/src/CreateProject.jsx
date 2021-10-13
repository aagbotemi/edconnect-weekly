import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Button, FormControl} from 'react-bootstrap';
import Layout from './shared/Layout';

const CreateProject = () => {
    /*
    const getCookie = () => {
        const cookieName = 'uid';

        const cookieArr = document.cookie.split(';')

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split('=')

            if (cookieName === cookiePair[0].trim()) {
                return cookiePair[1];
            } else {
                return '';
            }
        }
    }
    const redirect = useHistory(); 

    const userId = getCookie();

    if (userId === '') {
        redirect.push('/login');
    }
   */
    const history = useHistory ();
    const [error, setError] = useState ([]);
    const [createProject, setCreateProject] = useState ({
        name: '',
        abstract: '',
        tags: '',
        authors: '',
    });
    const handleChange = e => {
        const {name, value} = e.target;
        setCreateProject ({...createProject, [name]: value});
    };
    const {name, tags, abstract, authors} = createProject;

    const submitProject = e => {
        e.preventDefault ();
        const projectInfo = {
            name,
            tags: tags.split (','),
            abstract,
            authors: authors.split (','),
        };

        fetch ('/api/projects', {
            method: 'POST',
            body: JSON.stringify(projectInfo),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then (response => response.json ())
        .then (response => {
            if (response.status === 'ok') {
                history.push ('/');
                // setError ('');
            } else {
                setError(response.errors);
            }
        });
    };

    useEffect (() => {
        const timerError = setTimeout (() => {
            setError ([]);
        }, 3000);
        return () => clearTimeout(timerError);
    }, [error]);

    const checkForCookies=()=>{
        let cookieValue = document.cookie
        cookieValue = cookieValue.split('=')
        cookieValue = cookieValue[1]
        return cookieValue
    }

    if(!checkForCookies()) history.push("/login")

    return(checkForCookies() ?   
        <Layout>
            <section name="search" className="container mb-5 mt-4 mx-auto w-75">
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
                <div>
                    <h3><strong>Submit Project</strong></h3>
                </div>
                <Form
                    id="createProjectForm"
                    className="form-row"
                    onSubmit={submitProject}
                    name="submitProject"
                >
                    <Form.Label htmlFor="name">Project Name:</Form.Label>

                    <FormControl
                    type="text"
                    name="name"
                    id="name"
                    placehoder="Enter project name"
                    value={name}
                    onChange={handleChange}
                    />

                    <Form.Label htmlFor="abstract">Project Abstract:</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="abstract"
                    rows={3}
                    value={abstract}
                    onChange={handleChange}
                    />
                    <Form.Label htmlFor="authors">Authors:</Form.Label>
                    <FormControl
                    type="text"
                    id="authors"
                    name="authors"
                    value={authors}
                    placeholder="enter author name separated by comma"
                    onChange={handleChange}
                    />
                    <Form.Label>Tag(s):</Form.Label>
                    <FormControl
                    type="text"
                    name="tags"
                    id="tags"
                    value={tags}
                    onChange={handleChange}
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