'use strict';

// v1
var arrowGreeting = function arrowGreeting(message, name) {
    return message + name;
};

// v2
var arrowGreeting = function arrowGreeting(message, name) {
    return message + name;
};

// v3
var arrowGreeting = function arrowGreeting(message) {
    return 'Hi' + message;
};

// v4
var deliveryBoy = {
    name: 'David',

    handleMessage: function handleMessage(message, handler) {
        handle(message);
    },

    receive: function receive() {
        var _this = this;

        this.handleMessage("Hello, ", function (message) {
            console.log(message + _this.name);
        });
    }
};

deliveryBoy.receive();