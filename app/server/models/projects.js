const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
        this.id = id;
        this.name = name;
        this.abstract = abstract;
        this.authors = authors;
        this.tags = tags;
        this.createdBy = createdBy;
    }
}

class Projects extends DataModel {
    validate(obj) {
        let validatedProject = false;

        for (const key in obj) {
            if (obj[key] !== "" || obj[key] !== null || obj[key] !== undefined) {
                validatedProject = true;
            }
        }

        let authorsCheck = Array.isArray(obj.authors)
        let tagsCheck = Array.isArray(obj.tags)

        if (validatedProject && authorsCheck && tagsCheck) {
            return true
        } else {
            return false
        }
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};