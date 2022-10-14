

x = 10;//initilization
console.log(x);//using the variable

var x;//declaration

// add();

// function add() {

// }

//
var y;//declare
console.log(y);//undefined

y = 20;//initialization


var z = 30;//ideal way


// This keyword
// Alone
console.log(this);//refers to global object


// object: property or method

var person = {
    firstName: 'alina',
    lastName: 'joe',
    age: 20,
    designation: 'developer',
    fullName: function () {
        // console.log(person.firstName + person.lastName);
        console.log(this.firstName + ' ' + this.lastName);//this keyword will refer to person
    }
}

console.log(person.firstName + ' ' + person.lastName);
person.fullName();

// Scope
//global scope variables
var num = 20;
console.log(num);

//
function subtract() {
    //local scope
    var numTwo = 30;
    console.log(numTwo - num);
}

// console.log(numTwo);
subtract();


// window = {
//     num: 20,
//  subtract : function () {

//  },
// location: {
//     href: ''
// }
// }


console.log(window.history);
console.log(window.navigator);
console.log(window.location);
console.log(window.location.href);

var url = window.location.href;
console.log(url.split('/'));//converting string to an array


// Callback
function display(result) {
    console.log(result);
}

function calculate(a, b, cb) {//parameters
    var result = a + b;
    cb(result);
}

calculate(12, 34, display);//arguments

// display is a callback


// Timing events
// 1 sec = 1000ms
setTimeout(function () {
    console.log('Delay by 4 seconds');
}, 4000);


console.log('Value');
console.log('Learning Async');


// setInterval(function () {
//     var d = new Date();//creating date object
//     console.log(d);
// }, 2000);


//call chaining
//callback hell
// createOrder(product, function (orderId) {
//     payment(orderId, function (paymentInfo) {
//         showOrderHistory(paymentInfo, function () {
//             checkWalletBalance();
//         });
//     });
// });


//promises
//creating a promise object
var promise = new Promise(function (myResolve, myReject) {
    //producing code
    var x = 0;
    if (x === 0) {
        myResolve('ok');
        // [{}, {}, {}]
    }
    else {
        myReject('error');
    }
});

console.log(promise);

// consuming code
promise.then(function (val) {
    console.log(val);
}, function (err) {
    console.log(err);
});


//using promies
// createOrder(product).then(function () {
//    return payment(orderId);
// }).then(function (paymentInfo) {
//     return showOrderHistory(paymentInfo);
// }).then(function () {
//     checkWalletBalance();
// })


//API: Application Program Interface

// http status codes

// https://jsonplaceholder.typicode.com/posts/

function getData() {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(function (res) {
            console.log(res.data);

        }).catch(function (err) {
            console.log(err);
        });

    // fetch.get(url).then().catch();
}


// Reading a file asynchronously - Node.Js
// Browsers: Fetch API


// axios.post(url, {}).then().catch();


// Postname
// Node js
// express js



// To read about DOM methods:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// To read about API
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction



// HTTPS Status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


// free apis:
// https://rapidapi.com/collection/list-of-free-apis
// https://apipheny.io/free-api/#apis-without-key 