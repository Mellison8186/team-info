class Manager {
    constructor(name) {
      this.name = ['Alpha', 'Bravo', 'Charlie'];
      this.id = [];
      this.email = ['alpha@test.com', 'bravo@test.com', 'charlie@test.com'];
      this.officeNumber = Math.floor(Math.random() + 1);
    }
  }
  
  module.exports = Manager;