const Roles = require('./employee')

class Intern extends Roles {
    constructor(name = '', email = '', id = 0, school = 0) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;