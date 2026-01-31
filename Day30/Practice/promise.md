## Promise

https://medium.com/insiderengineering/mastering-javascript-promises-from-basics-to-advanced-f24669381c56

 Promise object represents the future completion(or failure) of an asynchronous operation and its resulting value

 * A promise is an object that represent a task will finish later and give a result or an error.

 A promise is one of these states.

 * Pending: initial state, neither fulfilled nor rejected.
 * fulfilled: meaning that operation was completed successfully.
 * rejected: meaning that the operation failed.

 ## Callback hell (Pyramid of doom)
 It refers to the complex structure that arises when we nest multiple callbacks inside a function.

 * Makes the code less readable and harder to maintain.


## What happen when it fulfilled or rejected
It enters the settled state in this step two imp. methods:

**then:** When promise fulfilled state me jaata h
-> then method allows you to specify a ***callback function or code block*** that will work with completed data.
    This is used to define what will happen when a successful result is obatined.

**catch:** When rejected state, the catch lets specify a callback function or code block that will work with the rejected error.
    Used to handle situation where the operation fails.

## Promise Chaining
It allows for sequential execution of async operation that depend on each other.

***If we want to perform certain actions after the operation is completed, whether rejected or resolved, we use **finally method*****