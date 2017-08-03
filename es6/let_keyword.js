//---- v1 ---// 
let message = "hi";
{
  let message = "bye";
}

console.log(message); // hi

//--- v2 ----// 
var fs = [];

for(var i=0; i < 10; i++) {
  fs.push(function(){
    console.log(i);
  });
}

fs.forEach(function(f){
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

for(let i=0; i < 10; i++) {
  fs.push(function(){
    console.log(i);
  });
}

fs.forEach(function(f){
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

  for(i = 0; i < n; i += 1) {
    temp = previous;
    previous = current;
    current = temp + current;
  }
}

// let version
function letFunction() {
  let previous = 0;
  let current = 1;

  for(let i = 0; i < n; i += 1) {
    let temp = previous;
    previous = current;
    current = temp + current;
  }
}




