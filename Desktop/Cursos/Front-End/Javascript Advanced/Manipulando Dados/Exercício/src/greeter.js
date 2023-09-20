function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Raysa", lastName: "Carraro" };
document.body.textContent = greeter(user);
