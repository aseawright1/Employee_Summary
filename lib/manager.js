const Roles = require('./employee')

class Manager extends Roles {
    constructor(name = '', email = '', id = 0, office = 0) {
        super(name, id, email)
        this.office = office
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;