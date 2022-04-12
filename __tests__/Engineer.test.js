const Engineer = require("../lib/Engineer");
const engineer = new Engineer('Frankie','102','frankie@fakemail.com','fakegithub');
test('test if we can get the properties for the engineer object', () => {
    expect(engineer.name).toBe('Frankie');
    expect(engineer.id).toBe('102');
    expect(engineer.email).toBe('frankie@fakemail.com');
    expect(engineer.github).toBe('fakegithub')
});

test('test if we can get the name by getName() method', () => {
    expect(engineer.getName()).toBe('Frankie');
});

test('test if we can get the id by getId() method', () => {
    expect(engineer.getId()).toBe('102');
});

test('test if we can get the email by getEmail() method', () => {
    expect(engineer.getEmail()).toBe('frankie@fakemail.com');
});

test('test if we can get the github by getGithub() method', () => {
    expect(engineer.getGithub()).toBe('fakegithub');
});

test('test if we can get the role by getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
