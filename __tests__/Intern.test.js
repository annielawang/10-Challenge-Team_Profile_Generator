const Intern = require("../lib/intern");

describe('Intern class', () => {
    it('should generate an incidence object of Intern class', () => {
        const name = "annie";
        const id = 333;
        const email = "annie@gmail.com";
        const school = "UOU";
        const output = new Intern(name, id, email, school);
        const expectedInternIncidence = {
            "name": "annie",
            "id": 333,
            "email": "annie@gmail.com",
            "school": "UOU",
        };
        expect(output).toEqual(expectedInternIncidence);
    });
});