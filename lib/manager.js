const Employee = require("./employee");
// brings in the employee document

// selects this information from the user
function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}
// displays that information
Manager.prototype.getRole = function () {
    return this.constructor.name;
}
Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}


module.exports = Manager;