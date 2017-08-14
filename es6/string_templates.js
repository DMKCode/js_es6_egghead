//v1 

let salutation = "Hello";
let greeting = `${salutation} World`;

console.log(greeting);

let anotherGreeting = `${salutation}

    World


`;

console.log(anotherGreeting);


// v2
let message = `It's ${new Date().getHours()} I'm sleepy`;

console.log(message);

function tag(strings, ...values) {
    console.log(strings); // [ 'It\'s ', ' I\'m sleepy' ]
    console.log(values); // [ 6 ]
}
// v3
let anotherMessage = tag`It's ${new Date().getHours()} I'm sleepy`;
