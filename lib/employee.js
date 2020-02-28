class Employee {
    constructor(name = '', id = 0, email = '') {
        this.name = name
        this.email = email
        this.id = id
    }

    getName() { return this.name }

    getId() { return this.id }

    getEmail() { return this.email }

    getRole() { return 'Employee' } // necessary?
}
module.exports = Employee