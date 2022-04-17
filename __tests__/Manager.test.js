const Manager = require("../lib/Manager");
const manager = new Manager('Frankie','102','frankie@fakemail.com','1');
test('test if we can get the properties for the manager object', () => {
    expect(manager.name).toBe('Frankie');
    expect(manager.id).toBe('102');
    expect(manager.email).toBe('frankie@fakemail.com');
    expect(manager.officeNumber).toBe('1');
});

test('test if we can get the name by getName() method', () => {
    expect(manager.getName()).toBe('Frankie');
});

test('test if we can get the id by getId() method', () => {
    expect(manager.getId()).toBe('102');
});

test('test if we can get the email by getEmail() method', () => {
    expect(manager.getEmail()).toBe('frankie@fakemail.com');
});

test('test if we can get the role by getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
