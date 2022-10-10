// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team

const Employee = require("../employee");

describe("intern", () => {
    describe("option", () => {
        it("should display input of name, ID, email, and school", () => {
            const input = "name, ID, email, school";
            const answers = "gayle, 1, test@email.com, UofA";

            const result = new option().stingInput(str);

            expect(input).toEqual(answers);
        });
    });
});
