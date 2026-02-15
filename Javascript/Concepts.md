## Asynchronous Operations
there are taks that run without blocking the main thread, allowing the application to continue executing other code while waiting for a result, in JS runs on a single-threaded event loop.

### how to Handle Asynchronous Code
there are 3 patterns:
1. Callbacks (older approach): Function that is passed as an argument to another function and is executed later, problems: Can lead to callback hell (this looks like flutter code xD)
2. Promises: Promises represent a future value (resolved or rejected). we are ensure that we execute the callbacks after success of failure, also you ca concat callback with then()
3. Async/Await: build on top of promisses. Makes async code look synchronous

### Diference between == and ===
== Loose equality (compares values after type coercion), performs **implicit type conversion**, which can lead to unexpected behavior
=== Strict equiality (compares values AND type)

### Clousures
A closure is created when a function remembers and has access to variables from its outer lexical scope, even after the outer function has finished executing.

In other words, un closure is a function autoexecute that encapsulate a serie of local variables a definitions that only will be accesible if there are return with return, that allows something like private variables, this is similar to class