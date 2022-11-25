const Employee = require("../lib/employee");

describe('Employee class', () => {
    it('should generate an incidence object of Employee class', () => {
        const name = "annie";
        const id = 111;
        const email = "annie@gmail.com";
        const output = new Employee(name, id, email);
        const expectedEmployeeIncidence = {
            "name": "annie",
            "id": 111,
            "email": "annie@gmail.com",
        };
        expect(output).toEqual(expectedEmployeeIncidence);
    });
});