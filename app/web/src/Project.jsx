import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import Layout from './shared/Layout';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState('');

    const {id} = useParams();

    useEffect (() => {
        fetch (`/api/projects/${id}`, {
            method: 'GET',
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then (response => response.json())
            .then (response => {
                setProjects(response);
                fetch (`/api/users/${response.createdBy}`, {
                    method: 'GET',
                    header: {
                        'Content-Type': 'application/json; charset=UTF-8',
                    },
                })
                    .then (response => response.json())
                    .then(response => {
                        setUser(response.firstName + ' ' + response.lastName)
                    });
                
            });
    }, [id]);

    return (
        <Layout>
            <div>
                {projects &&
                    <div>
                        <section name="project" className="container mt-4 mb-5">
                            <h1 id="project_name">{projects.name}</h1>
                            <div className="row bg-light text-secondary">
                                <div id="project_author" className="col p-3 d-flex align-items-center">
                                    <p>
                                        <strong>Created By: <br /></strong>
                                        {user}
                                    </p>
                                </div>
                                <div className="col p-3 d-flex align-items-center">
                                    <p><strong>Date Created: <br /> 2020/08/30</strong></p>
                                </div>
                                <div className="col p-3 d-flex align-items-center">
                                    <p><strong>Last Updated: <br /> 2020/08/30</strong></p>
                                </div>
                                <div className="col p-3 d-flex align-items-center justify-content-end">
                                    <Link to="/l" className="btn btn-primary" type="viewProject">
                                        Edit Project
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-6">
                                    <h5>Project Abstract</h5>
                                    <hr />
                                    <p id="project_abstract">{projects.abstract}</p>
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
                                        <p id="project_authors" className="card-text py-2 px-3 text-align-center">
                                            {/* {projects.authors} */}
                                        {projects.authors &&
                                            projects.authors.map (author => (
                                            <strong key={author}>{author}<br /></strong>
                                            ))}
                                        </p>
                                    </div>
                                    <div className="card">
                                        <div id="project_tags" className="card-header">
                                        {projects.tags &&
                                            projects.tags.map (tag => (
                                            <strong style={{color: "#3aa"}} key={tag}>{tag} </strong>
                                            ))}
                                            {/* <strong style={{color: "blue"}}>
                                                #{projects.tags &&
                                            projects.tags.join(", ")}
                                            </strong> */}
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
                }
            </div>
        </Layout>
    );
};

export default Project;