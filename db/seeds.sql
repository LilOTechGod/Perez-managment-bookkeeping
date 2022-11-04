USE employee_db;

INSERT INTO department (name) VALUES ("HR"), ("Engineer"), ("finance"), ("sales");

INSERT INTO role (title, salary, department_id) VALUES ("software engineer", 90, 2), ("recruiter", 75, 1), ("analyst", 90, 3), ("sales rep", 80, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("David", "Park", 1, NULL), ("Oscar", "Perez", 2, 1), ("Tom", "Johnson", 3, 2), ("Preston", "Hill", 4, 3);

