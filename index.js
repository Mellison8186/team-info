const inquirer = require('inquirer');
const fs = require('fs');
// const src = require('src');
// const writeFileAsync = src.promisify(fs.writeFile);
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function init() {
  
  inquirer.prompt([
    {
    type: `input`,
    name: `mgrName`,
    message: `Input manager's name:`
    },
    {
    type: `number`,
    name: `employeeId`,
    message: `Input manager's ID:`
    },
    {
    type: `input`,
    name: `emailAddy`,
    message: `Input manager's email address:`
    },
    {
    type: `input`,
    name: `officeNum`,
    message: `Input manager's office number:`
    }
    ]).then(answers => {
      var manager = new Manager(answers.mgrName, answers.employeeId, answers.emailAddy, answers.officeNum)
        console.log(manager);
        createEmployee()
        // writeFileAsync('team.html',html(manager))}
    });
        };

        function createEmployee(){
          inquirer.prompt(
          {
          type: 'list',
          name: 'employeeType',
          message: 'Would you like to add an Engineer, Intern, or finish building your team?',
          choices: ['Engineer', 'Intern', 'Finish']
          },
          ).then(data => {

            if (data.employeeType == 'Engineer'){
              return inquirer.prompt([
              {
              type: 'input',
              name: 'engName',
              message: "Input engineer's name:"
              },
              {
              type: 'input',
              name: 'employeeId',
              message: "Input engineer's ID:"
              },
              {
              type: 'input',
              name: 'emailAddy',
              message: "Input Engineer's email address:"
              },
              {
              type: 'input',
              name: 'github',
              message: "Input Engineer's GitHub:"
              },
              ]).then(data => {
                var engineer = new Engineer(data.engName, data.employeeId, data.emailAddy, data.github)
                console.log(engineer)
          // writeFileAsync('team.html',html(engineer));
              })
            };
            if (data.employeeType == 'Intern'){
              return inquirer.prompt([
              {
              type: 'input',
              name: 'internName',
              message: "Input Intern's name:"
              },
              {
              type: 'input',
              name: 'employeeId',
              message: "Input Intern's ID:"
              },
              {
              type: 'input',
              name: 'emailAddy',
              message: "Input Interns's email address:"
              },
              {
              type: 'input',
              name: 'school',
              message: "Input Intern's school name:"
              },
              ]).then(data => {
                var intern = new Intern(data.internName, data.employeeId, data.emailAddy, data.school)
                console.log(intern)
              });
            };
            if (data.employeeType == 'Finish'){
              // writeFileAsync('team.html',html(engineer));
            }
          })

        };
init()