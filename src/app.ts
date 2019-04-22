import { Person, greeter } from "./person";
import txt from "./assets/hello.txt";
import * as data from "./assets/data.json";
import * as kitten from "./assets/kitten.jpg"

// Typescript class
let dude: Person = { firstName: "Dave", lastName: "Norg" };
let msg = greeter(dude);
document.write(msg);
document.write("<br/>");

// Embedded text file
document.write(txt);
document.write("<br/>");

// Embedded JSON
document.write(data.caption + ":");
document.write("<br/>");

// Embedded image
let img = document.createElement("img");
img.src = kitten;
document.getElementsByTagName("body")[0].append(img);