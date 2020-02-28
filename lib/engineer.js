const Roles = require('./employee')

class Engineer extends Roles {
    constructor(name = '', email = '', id = 0, github = 0) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;