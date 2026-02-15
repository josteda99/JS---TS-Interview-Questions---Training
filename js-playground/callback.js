//defining the funciont that I will pass after anoher
function getName(name) {
  console.log(name);
}

//main function
function getInformation(callback) {
  callback("name");
  console.log("y ahora");
}

//here I had a problem because I pass getName() instead getName
//remember I have to pass the function
getInformation(getName);

//this is the clasic but how it works?
setTimeout(() => {
  console.log("Done");
}, 1000);

//first you have a setTimeout that is a funcion that execute
//a funciont or piece of code after tempo

//for example
//this is the function that I will pass
function hello() {
  console.log("Helloda");
}

function goodbye() {
  console.log("hood bye");
}

//no hello()
//this should be console before the second example
setTimeout(hello, 500);
getInformation(getName);

//I want to check want happen if I execute
setTimeout(goodbye, 0);
//result is the like call sync function
// answer to past josteda, naaaaaahhhhhh, this is working with callstack, call queue, event loop and web api
// overview: goodbye will be displayed only when the functions is in
// call queue and call stack is empty
