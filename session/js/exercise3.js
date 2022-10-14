// Display alert box after 3 seconds of website loaded.
setTimeout(function () {
  alert("Hello World");
}, 3000);
// Look for API and display few data records in UI (movie data api)
function getData() {
  fetch("https://randomuser.me/api/?results=10")
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Create a function to get data from user and display that in callback function
function display(userName) {
  console.log(userName);
}
display("Sarah");

// Use the Promise constructor to create a promise that will:
// resolve if itShouldResolve is truthy
// reject if itShouldResolve is falsy

//This code is not working, please help me.
var firstPromise = new Promise(function (resolve, reject) {
  var y = 5;
  if (y < 5) {
    resolve("Ok");
  } else {
    reject("not Ok");
  }
});

console.log(firstPromise);

firstPromise.then(
  function (val) {
    console.log(val);
  },
  function (err) {
    console.log(err);
  }
);
// Return a promise that resolves with the value after delayInMs.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));
// Make a function that takes in a single parameter and returns a new promise. using setTimeout,  after 5000 milliseconds, the promise will either resolve or reject. if the input is a string, the promise resolves with that same string uppercased. if the input is anything but a string it rejects with that same input

//This code is not working, please help me.

function is_string(input) {
  if (typeof input == "string") {
    return stringUpper();
  } else {
    return stringNot();
  }
}

function stringUpper() {
  return Promise.resolve(input.toUpperCase());
}
function stringNot() {
  return Promise.reject(input);
}

console.log(is_string("hello"));
