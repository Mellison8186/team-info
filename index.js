const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./src/generateHTML.js');

const writeToFile = (data) => {
  console.log(data)

      fs.writeFile('./myteam.html', generateHTML(data), err => {
        if (err) throw err;
        });
      };

  var team = []

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
      team.push(manager);

        createEmployee()
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
              ]).then(answers => {
                var engineer = new Engineer(answers.engName, answers.employeeId, answers.emailAddy, answers.github)
                team.push(engineer);
                createEmployee()
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
                team.push(intern);
                createEmployee()
              });
            };

            if (data.employeeType == 'Finish'){
              writeToFile(team);
              return
            };
          });
        };
init()