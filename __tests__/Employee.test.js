const Employee = require("../lib/Employee");
const employee = new Employee('Frankie','102','frankie@fakemail.com');
test('test if we can get the properties for the employee object', () => {
    expect(employee.name).toBe('Frankie');
    expect(employee.id).toBe('102');
    expect(employee.email).toBe('frankie@fakemail.com');
});

test('test if we can get the name by getName() method', () => {
    expect(employee.getName()).toBe('Frankie');
});

test('test if we can get the id by getId() method', () => {
    expect(employee.getId()).toBe('102');
});

test('test if we can get the email by getEmail() method', () => {
    expect(employee.getEmail()).toBe('frankie@fakemail.com');
});

test('test if we can get the role by getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});

