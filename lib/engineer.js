const Roles = require('./employee')

class Engineer extends Roles {
    constructor(name = '', id = 0, email = '', github = 0) {
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

module.exports = Engineer