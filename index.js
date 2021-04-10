const inquirer = require('inquirer');
const HTML = require('./dist/team.html');
const fs = require('fs');
const src = require('src');
const writeFileAsync = src.promisify(fs.writeFile);
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Team {
    constructor() {
      this.jobTitle = [];
      this.manager;
    }

    createEmployee() {
        this.jobTitle[Engineer, Intern];
  
      inquirer
        .prompt([
            {
          type: 'text',
          name: 'name',
          message: `Enter ${jobTitle}'s name:`
            },
        ]).then(data => writeFileAsync('team.html',html(data)));
        };

    };

createEmployee();

  module.exports = Team;