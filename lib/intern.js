const Roles = require('./roles')

class Intern extends Roles {
    constructor(name = '', email = '', id = 0, school = 0) {
        this.school = school
        super(name, id, email)
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;