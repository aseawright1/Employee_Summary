const Roles = require('./employee')

class Manager extends Roles {
    constructor(name = '', id = 0, email = '', office = 0) {
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