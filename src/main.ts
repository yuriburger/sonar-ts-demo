interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    let myString = "Hello, " + person.firstName + " " + person.lastName;

    return myString;
}

var user ={ firstName: "John", lastName: "Doe" };