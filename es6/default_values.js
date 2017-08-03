
//--- v1 ---//
function greet(greeting, name = "David") {
  console.log(greeting + ", " + name);
}

greet("Hello", "Bill"); // Hello, Bill
greet("Hello"); // Hello, David

//--- v2 ---//
function receive(complete = function() {
  console.log("complete");
}){
  complete();
}

receive();
//------------

//--- v3 ---//
function receive(complete = ()=> console.log("complete")) {
  complete();
}

receive();