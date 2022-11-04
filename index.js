const inquirer = require("inquirer");
const cTable = require('console.table');



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
      
    } 