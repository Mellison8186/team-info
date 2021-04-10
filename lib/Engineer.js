const Manager = require('../lib/Manager');
const Employee = require('./lib/Employee');

class Engineer extends Employee {
  constructor(name = '') {
    super(name);
  }
};