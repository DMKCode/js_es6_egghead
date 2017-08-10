let firstname = "David";
let lastname = "Kananda";

let person = {firstname, lastname};

console.log(person); // {firstname: "David", lastname: "Kananda"}

let mascot = "Moose";
let team = {person, mascot};
console.log(team); // { person: { firstname: "David", lasname: "Kananda"}, mascot: "Moose" }