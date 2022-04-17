const Intern = require("../lib/Intern");
const intern = new Intern('Frankie','102','frankie@fakemail.com','columbia');
test('test if we can get the properties for the intern object', () => {
    expect(intern.name).toBe('Frankie');
    expect(intern.id).toBe('102');
    expect(intern.email).toBe('frankie@fakemail.com');
    expect(intern.school).toBe('columbia');
});

test('test if we can get the name by getName() method', () => {
    expect(intern.getName()).toBe('Frankie');
});

test('test if we can get the id by getId() method', () => {
    expect(intern.getId()).toBe('102');
});

test('test if we can get the email by getEmail() method', () => {
    expect(intern.getEmail()).toBe('frankie@fakemail.com');
});

test('test if we can get the role by getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we can get the school by getSchool() method', () => {
    expect(intern.getSchool()).toBe('columbia');
});