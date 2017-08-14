"use strict";

var _templateObject = _taggedTemplateLiteral(["It's ", " I'm sleepy"], ["It's ", " I'm sleepy"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//v1 

var salutation = "Hello";
var greeting = salutation + " World";

console.log(greeting);

var anotherGreeting = salutation + "\n\n    World\n\n\n";

console.log(anotherGreeting);

// v2
var message = "It's " + new Date().getHours() + " I'm sleepy";

console.log(message);

function tag(strings) {
    console.log(strings); // [ 'It\'s ', ' I\'m sleepy' ]

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log(values); // [ 6 ]
}
// v3
var anotherMessage = tag(_templateObject, new Date().getHours());