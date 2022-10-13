const Employee = require("./employee");
// brings in the employee document

// selects the information from the user
function Intern(name, id, email, school) {
    Employee.call(this, name, id , email)
    this.school = school;
}

// displays that information
Intern.prototype.getRole = function () {
    return this.constructor.name;
}

Intern.prototype.getSchool = function () {
    return this.school;
}


module.exports = Intern;