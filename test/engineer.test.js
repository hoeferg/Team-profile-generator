// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const Employee = require("../employee");

describe("engineer", () => {
    describe("option", () => {
        it("should display input of name, ID, email, and GitHub username", () => {
            const input = "name, ID, email, github";
            const answers = "gayle, 1, test@email.com, hoeferg";

            const result = new option().stingInput(str);

            expect(input).toEqual(answers);
        });
    });
});
