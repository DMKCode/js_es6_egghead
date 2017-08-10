let color = "red";
let speed = 10;

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
let drive = "go";
let car = {
    color,
    speed,
    [drive]: function() {
        console.log("vroom");
    } 
};
console.log(car.color); // red
console.log(car.speed); // 10

car.go(); // vroom