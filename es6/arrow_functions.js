
// v1
var arrowGreeting = (message, name) => {
    return message + name;
}

// v2
var arrowGreeting = (message, name) => message + name;

// v3
var arrowGreeting = message => 'Hi' + message;

// v4
var deliveryBoy = {
    name: 'David',

    handleMessage: function(message, handler) {
        handle(message);
    },

    receive: function() {
        this.handleMessage("Hello, ", (message) => {
            console.log(message + this.name);
        })
    }
}

deliveryBoy.receive();