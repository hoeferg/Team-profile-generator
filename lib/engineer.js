const Employee = require("./employee");
// brings in employee file

function Engineer(name, id, email, github) {
    Employee.call(this, name, id , email)
    this.github = github;
}
// Identifies information from user input

// displays that information
Engineer.prototype.getRole = function () {
    return this.constructor.name;
}

Engineer.prototype.getGithub = function () {
    return this.github;
}


module.exports = Engineer;