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
        this.errors = []
        let errorMsg
        
        let authorsArray = Array.isArray(obj.authors)
        if (!authorsArray) {
            this.errors.push("Authors should be an array")
        }

        let tagsArray = Array.isArray(obj.tags)
        if (!tagsArray) {
            this.errors.push("Tags should be an array")
        }

        for (const key in obj) {
            if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
                if (key !== 'authors' && key !== 'tags') {
                    errorMsg = `${key} should not be empty`
                    this.errors.push(errorMsg)
                }
            }
        }

        if (this.errors.length == 0) {
            return true
        }
        return false
    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    Project,
    Projects
};