const Roles = require('./roles')

class Manager extends Roles {
    constructor(name = '', email = '', id = 0, office = 0) {
        this.office = office
        super(name, id, email)
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;