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
                        ))} */}

                    </p>
                  </div>
                  <div className="card">
                    <div id="project_tags" className="card-header">
                    {props.props1.tags}
                      {/* {projects.tags &&
                        projects.tags.map (tag => (
                          <strong key={tag}>{tag}</strong>
                        ))} */}
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