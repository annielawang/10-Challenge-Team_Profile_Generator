const Manager = require("../lib/manager");

describe('Manager class', () => {
    it('should generate an incidence object of Manager class', () => {
        const name = "annie";
        const id = 444;
        const email = "annie@gmail.com";
        const officeNumber = "8888";
        const output = new Manager(name, id, email, officeNumber);
        const expectedManagerIncidence = {
            "name": "annie",
            "id": 444,
            "email": "annie@gmail.com",
            "officeNumber": "8888",
        };
        expect(output).toEqual(expectedManagerIncidence);
    });
});