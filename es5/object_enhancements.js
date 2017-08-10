"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = "red";
var speed = 10;

// v1
// function go() {
//     console.log("vroom");
// }

// let car = {
//     color,
//     speed,
//     go
// };

// v2
// let car = {
//     color,
//     speed,
//     go() {
//         console.log("vroom");
//     } 
// };


// v3
var drive = "go";
var car = _defineProperty({
    color: color,
    speed: speed
}, drive, function () {
    console.log("vroom");
});
console.log(car.color); // red
console.log(car.speed); // 10

car.go(); // vroom