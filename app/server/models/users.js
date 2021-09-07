const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        let authenticatedUser = this.data.find(item => item.email === email && item.password === password)
        return authenticatedUser ? true : false;
    }

    getByEmail(email) {
        let userEmail = this.data.find(item => item.email === email)
        return userEmail ? userEmail : null;
    }

    getByMatricNumber(matricNumber) {
        let userMatricNumber = this.data.find(item => item.matricNumber === matricNumber)
        return userMatricNumber ? userMatricNumber : null
    }

    validate(obj) {
        // let validatedUser = false
        this.errors = []
        let errorMsg

        for (const key in obj) {
            if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
                errorMsg = `${key} should not be empty`
                this.errors.push(errorMsg)
            }
        }

        let emailCheck = this.data.find(item => item.email === obj.email);
        if (emailCheck) {
            errorMsg = `A user with ${obj.email} address already exists`
            this.errors.push(errorMsg)
        }
        
        let matricNumberCheck = this.data.find(item => item.matricNumber === obj.matricNumber);
        if (matricNumberCheck) {
            errorMsg = `A user with ${obj.matricNumber} already exists`
            this.errors.push(errorMsg)
        }

        let passwordCheck = obj.password.length < 7;
        if (passwordCheck) {
            errorMsg = 'Password should have at least 7 characters'
            this.errors.push(errorMsg)
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
    User,
    Users
};