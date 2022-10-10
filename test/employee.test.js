// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const Employee = require("../employee");

describe("employee", () => {
    describe("promptTeamRole", () => {
        it("should return true of there is a list of team member roles to pick from", () => {
            const str = ["employee", "engineer", "intern", "manager"];

            const result = new Employee().isCreated();

            expect(result).toEqual(true);
        });
    });

    describe("generateHTML", () => {
        it("should return true if a new HTML file is generated when all answers are entered", () => {
            const str = "html";

            const result = new generateHTML().isCreated();

            expect(result).toEqual(true);
        });

        it("should return false if no HTML document is created", () => {
            const str = "html";

            const result = new generateHTML().isNotCreated();

            expect(result).toEqual(false);
        });
    });

    describe("email", () => {
        it("should open my default email program and populates the TO field of the email with the address", () => {
            const str = "email";
            const newEmail = "gmail.com"

            const result = new email().opensEmail();

            expect(result).toEqual(true);
        });
    });

    describe("gitHub", () => {
        it("should open browser and link it to my github", () => {
            const str = "github";
            const newEmail = "github.com"

            const result = new email().opensGithub();

            expect(result).toEqual(true);
        });
    });
});
