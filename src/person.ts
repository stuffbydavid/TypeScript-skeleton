export interface Person {
    firstName: string,
    lastName: string
}

export function greeter(person: Person) {
    return "Hola, " +person.firstName;
}