// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

const Employee = require("../employee");

describe("manager", () => {
    describe("option", () => {
        it("should display input of name, ID, email, and school", () => {
            const input = "name, ID, email, office number";
            const answers = "gayle, 1, test@email.com, 1";

            const result = new option().stingInput(str);

            expect(input).toEqual(answers);
        });
    });
});
