var console = {};
console.log = function(message){
    $.writeln(message);
};

var greeting = require('./modules/greeting.js');

console.log( greeting.sayHello('World') );
console.log( greeting.sayHello('Taro') );