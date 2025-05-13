// var generateName = require("sillyname");
import generateName from "sillyname";
import { randomSuperhero } from "superheroes";
var sillyName = generateName();
const superName = randomSuperhero();

console.log(`My name is ${sillyName}, Superhero name is ${superName}`);