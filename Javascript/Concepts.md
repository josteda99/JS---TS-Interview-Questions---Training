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

In other words, un closure is a function auto-execute that encapsulate a serie of local variables a definitions that only will be accesible if there are return with return, that allows something like private variables, this is similar to class

### Null vs Undefined
Undefined: variable that has been declared but not assigned value, automatically assign by JS
Null: variable that is intentionally assigned, explicit absence of value
`null` == `undefined` -> true
`null === `undefined` -> false
I use `undefined` for uninitialized variables and `null` when I intentionally want to represent an empty or missing value in my application logic.

### Event Loop
JS is single thread (execute 1 item at time) but that unique thread could be block
* Call Stack
	* last in first out
	* we can fill the stack (♾️loop) - Max call stack size exceeded and block the app
	* that is how it works stack trace in console
* Web Api
	* this is like a thread that recieves functions outside of call stack
	* no block the app
	* prepare the callback queue
* Callback queue
	* receive callback from web API
* Event loop
	* ♾️ loop that wait any function in the callback queue to sent to the call stack, but only if call stack is empty
* Task and microtasks
	* this is similar to callback queue but...
		* micro tasks queue has more priority than callback queue
		* promises add functions to this queue
		* event loop check first microtask until is empty and then callback queue