import * as data from "./data.json";
import { greeter } from "./greeter";

let msg = greeter({ firstName: "Dave", lastName: "Norg" });
console.log(msg);

document.write(msg);
document.write("<br/>");
document.write(data.caption);
document.write("<br/>");

let img = document.createElement("img");
img.src="src/assets/cat.jpg";
document.getElementsByTagName("body")[0].append(img);