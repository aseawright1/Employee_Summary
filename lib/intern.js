const Roles = require('./employee')

class Intern extends Roles {
    constructor(name = '', id = 0, email = '', school = 0) {
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