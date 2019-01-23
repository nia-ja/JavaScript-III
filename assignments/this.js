/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*



* 1. Window Binding
`this` is the global object in non-strict mode, and undefined in strict mode.

* 2. Implicit Binding
`this` points to the object on which the function is called (what’s to the left of the period when the function is called). It's automatic binding.

* 3. Explicit Binding
We can explicitly tell the JavaScript engine to set `this` to point to a certain value using .call(), .apply() or .bind(). We control `this`.

* 4. New Binding
Using the `new` keyword constructs a new object, and `this` points to it.



*
* write out a code example of each explanation above
*/




// Principle 1
// code example for Window Binding

function bePolite () {
    // "use strict"; <---- if we'll use this line of code, `this` will return `undefined`
    return `${this} tells thank you!`;
}
console.log(bePolite()); // `this` returnes global object


// Principle 2
// code example for Implicit Binding

const son = {
    name: "Vatslau",
    food: "pancakes",
    eats: function() {
        return `${this.name} likes to eat ${this.food}.`;
    }
}
console.log(son.eats());

// Principle 3
// code example for New Binding

function EmployeeWeb (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = "WebDev";
    this.skills = function () {
        return `${this.firstName} ${this.lastName} from ${this.department} department knows HTML, CSS and JS.`
    }
}

const john = new EmployeeWeb("John", "Fisherman");
console.log(john);
console.log(john.skills());


// Principle 4
// code example for Explicit Binding

const person = {
    name: "Eric"
}

const hobbies = ["fishing", "gaming", "astronomy"];

function myHobbies (hobbies1, hobbies2, hobbies3) {
    "use strict";
    return `My name is ${this.name} and I like ${hobbies1}, ${hobbies2} and ${hobbies3}.`;
}

console.log(myHobbies.call(person, ...hobbies));

console.log("END OF THIS.JS");