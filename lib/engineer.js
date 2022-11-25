const Employee = require("./employee");

// Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github_username) {
      super(name, id, email);
      this.github_username = github_username;
    }

    getGitHub(){
        return this.github_username;
    }

    getRole(){
        return "Engineer";
    }
  }

module.exports = Engineer;