
// Gets the info from the function
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
// returns that information to the user
Employee.prototype.getName = function () {
    return this.name;
}
Employee.prototype.getId = function () {
    return this.id;
}
Employee.prototype.getEmail = function () {
    return this.email;
}
Employee.prototype.getRole = function () {
    return this.constructor.name;
}

module.exports = Employee;