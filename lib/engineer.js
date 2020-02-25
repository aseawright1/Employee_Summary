const Roles = require('./roles')

class Engineer extends Roles {
    constructor(name = '', email = '', id = 0, github = 0) {
        this.github = github
        super(name, id, email)
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;