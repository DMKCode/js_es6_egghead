"use strict";

var firstname = "David";
var lastname = "Kananda";

var person = { firstname: firstname, lastname: lastname };

console.log(person); // {firstname: "David", lastname: "Kananda"}

var mascot = "Moose";
var team = { person: person, mascot: mascot };
console.log(team); // { person: { firstname: "David", lasname: "Kananda"}, mascot: "Moose" }