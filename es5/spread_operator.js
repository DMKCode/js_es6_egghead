"use strict";

// v1 
var first = [1, 2, 3];
var second = [4, 5, 6];

// first.push(...second);
// console.log(first) // [1,2,3,4,5,6]

// v2
function addThreeThings(a, b, c) {
    var result = a + b + c;
    console.log(result);
}

addThreeThings.apply(undefined, first); // 6
addThreeThings.apply(undefined, second); // 15