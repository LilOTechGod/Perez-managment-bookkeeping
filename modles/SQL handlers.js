const connection = require ("../config/connection.js");

class Join {
    constructor (connection) {
        this.connection = connection
    }
    // find all departments method
    findAllDepartments () {
        return this.connection.promise().query("SELECT * FROM department;")
    }
    // find all roles method
    findAllRoles () {
        return this.connection.promise().query("SELECT * FROM role;")
    }
    // find all employee method
    findAllEmployee () {
        return this.connection.promise().query("SELECT * FROM employee;")
    }
    // add a department method
    addDepartment (department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department)
    }
    // add a role method
    addRole (department) {
        return this.connection.promise().query("INSERT INTO role SET ?", department)
    }
    // add an employee method
    addEmployee (department) {
        return this.connection.promise().query("INSERT INTO employee SET ?", department)
    }
    // update an empolyee role
    updateEmployee (employeeId, managerId) {
        return this.connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [managerId, employeeId])
    }
}

module.exports = new Join(connection);