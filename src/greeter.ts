import {Person} from "./person";

export function greeter(person: Person) {
    return "Hola, " +person.firstName;
}