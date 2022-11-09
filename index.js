const inquirer = require("inquirer");
const cTable = require('console.table');
const join = require('./modles/SQL handlers');
const db = require("./modles/SQL handlers");
const connection = require("./config/connection");
const textArt = `
██████╗░███████╗██████╗░███████╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚════██║
██████╔╝█████╗░░██████╔╝█████╗░░░░███╔═╝
██╔═══╝░██╔══╝░░██╔══██╗██╔══╝░░██╔══╝░░
██║░░░░░███████╗██║░░██║███████╗███████╗
╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚══════╝╚══════╝

██████╗░░█████╗░░█████╗░██╗░░██╗██╗░░██╗███████╗██████╗░██████╗░██╗███╗░░██╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██║░██╔╝██╔════╝██╔══██╗██╔══██╗██║████╗░██║██╔════╝░
██████╦╝██║░░██║██║░░██║█████═╝░█████═╝░█████╗░░██████╔╝██████╔╝██║██╔██╗██║██║░░██╗░
██╔══██╗██║░░██║██║░░██║██╔═██╗░██╔═██╗░██╔══╝░░██╔═══╝░██╔═══╝░██║██║╚████║██║░░╚██╗
██████╦╝╚█████╔╝╚█████╔╝██║░╚██╗██║░╚██╗███████╗██║░░░░░██║░░░░░██║██║░╚███║╚██████╔╝
╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░░░░╚═╝░░░░░╚═╝╚═╝░░╚══╝░╚═════╝░`

console.log(textArt);
  const questions = ()=> {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choices',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        })
        .then((answers)=>{
            console.log(answers.departments);

            switch (answers.choices) {
             case "view all departments" : viewDepartments(); break;

             case "view all roles" : viewRoles(); break;
            
             case "view all employees" : viewEmployees(); break;

             case "add a department" : addDepartment(); break;

             case "add a role" : addRole(); break;

             case "add an employee" : addEmployee(); break;

             case "update an employee role" : updateEmployee(); break;
            }

        });
    }

    questions();

    function viewDepartments() {
      join.findAllDepartments().then(([response]) => {
        console.table(response);
        questions();
      }) 
    } 

    function viewRoles() {
      join.findAllRoles().then(([response]) => {
        console.table(response);
        questions();
      }) 
      // let positon = await join.findAllRoles();
      // console.table(position);
      // questions();
    }

    function viewEmployees() {
      join.findAllEmployee().then(([response]) => {
        console.table(response);
        questions();
      }) 
    } 

    function addDepartment() {
      inquirer.prompt(
        {
            type: 'input',
            name: 'message',
            message: "what department do you want to add"
        }) .then((response) => {
        console.log(response);
        const sql = `INSERT INTO department (name)
        VALUES (?)`;
        const result = [response.message];
        connection.query(sql, result, function (err, results) {});
        connection.query("SELECT * FROM department", function (err, results) {
        console.log("\n");
        console.table(results);
      });
        questions();
      }) 
    } 

    function addRole() {
      inquirer.prompt(
        [{
          type: 'input',
          name: 'title',
          message: "what title do you want to add"
        },
        {
          type: 'input',
          name: 'salary',
          message: "what is the desired salary"
        },
        {
          type: 'input',
          name: 'department_id',
          message: "what is the department_id"
        }]).then((response) => {
        console.log(response);
        const sql = `INSERT INTO role SET ?`;
        const result = {title:response.title, salary:response.salary, department_id:response.department_id};
        connection.query(sql, result, function (err, results) {});
        connection.query("SELECT * FROM role", function (err, results) {
        console.log("\n");
        console.table(results);
      });
         questions();
      }) 
    } 

    function addEmployee() {
      inquirer.prompt(
        [{
          type: 'input',
          name: 'first',
          message: "What is their first name?"
        },
        {
          type: 'input',
          name: 'last',
          message: "what is their last name?"
        },
        {
          type: 'input',
          name: 'role_id',
          message: "what is their role id"
        },
        {
          type: 'input',
          name: 'manager_id',
          message: "What is their manager id"
        }]).then((response) => {
        console.log(response);
        const sql = `INSERT INTO employee SET ?`;
        const result = {first:response.first, last:response.last, role_id:response.role_id, manager_id:response.manager_id};
        connection.query(sql, result, function (err, results) {});
        connection.query("SELECT * FROM employee", function (err, results) {
        console.log("\n");
        console.table(results);
      });
         questions();
      }) 
    } 