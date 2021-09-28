class DataModel {
    constructor() {
        this.data = [];
        this.errors = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        let user = this.data.find(item => item.id == id)
        return user ? user : null
    }
    
    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        let updatedUser = this.data.find(item => item.id === id);
        if (updatedUser) {
            for (const key in obj) {
                updatedUser[key] = obj[key]
            }
            return true
        }
        return false
    }

    delete(id) {
        let deletedUser = this.data.find(item => item.id === id);
        let index = this.data.indexOf(deletedUser)
        if (deletedUser) {
            this.data.splice(index, 1)
            return true
        }
        return false
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;