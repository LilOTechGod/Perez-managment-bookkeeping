const connection = require ("./connection.js");

class join {
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
    // add an employee method
    // update an empolyee role
    
}