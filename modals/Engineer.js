const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    } 
    getRole() {
        return 'Engineer'
    }
    getGitHub() {
        console.log(this.github)
        return this.github
    }
}

module.exports = Engineer;