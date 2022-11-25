const Engineer = require("../lib/engineer");

describe('Engineer class', () => {
    it('should generate an incidence object of Engineer class', () => {
        const name = "annie";
        const id = 222;
        const email = "annie@gmail.com";
        const github_username = "annielawang";
        const output = new Engineer(name, id, email, github_username);
        const expectedEngineerIncidence = {
            "name": "annie",
            "id": 222,
            "email": "annie@gmail.com",
            "github_username": "annielawang",
        };
        expect(output).toEqual(expectedEngineerIncidence);
    });
});