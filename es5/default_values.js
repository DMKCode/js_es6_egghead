"use strict";

//--- v1 ---//
function greet(greeting) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "David";

  console.log(greeting + ", " + name);
}

greet("Hello", "Bill"); // Hello, Bill
greet("Hello"); // Hello, David

//--- v2 ---//
function receive() {
  var complete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    console.log("complete");
  };

  complete();
}

receive();
//------------

//--- v3 ---//
function receive() {
  var complete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return console.log("complete");
  };

  complete();
}

receive();