const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

class Intern extends Employee {
  constructor(name = '') {
    super(name);

    // this.inventory = [new Potion('health'), new Potion()];
  }