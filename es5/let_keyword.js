"use strict";

//---- v1 ---// 
var message = "hi";
{
  var _message = "bye";
}

console.log(message); // hi

//--- v2 ----// 
var fs = [];

for (var i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  });
}

fs.forEach(function (f) {
  f();
});

// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

//-----

var fs = [];

var _loop = function _loop(_i) {
  fs.push(function () {
    console.log(_i);
  });
};

for (var _i = 0; _i < 10; _i++) {
  _loop(_i);
}

fs.forEach(function (f) {
  f();
});

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//--- v3 ---//
function varFunction() {
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for (i = 0; i < n; i += 1) {
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

// let version
function letFunction() {
  var previous = 0;
  var current = 1;

  for (var _i2 = 0; _i2 < n; _i2 += 1) {
    var temp = previous;
    previous = current;
    current = temp + current;
  }
}