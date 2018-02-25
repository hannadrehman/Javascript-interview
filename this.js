/**
 * we use the this keyword as a shortcut, a referent; 
 * it refers to an object; that is, the subject in context, 
 * or the subject of the executing code. Consider this example:
 */ 
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
   
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
         /**
         * Notice we use "this" just as we used "he" in the example sentence earlier​
         * We could have also written this:​​
         */ 
    }
}
/**
 * First, know that all functions in JavaScript have properties, 
 * just as objects have properties. And when a function executes, 
 * it gets the 'this' property —a variable with the value of the object 
 * that invokes the function where this is used.
 */ 

/**
 * The this reference ALWAYS refers to (and holds the value of) 
 * an object—a singular object—and it is usually used inside 
 * a function or a method, although it can be used outside a function 
 * in the global scope. 
 * Note that when we use strict mode, this holds the value of undefined 
 * in global functions and in anonymous functions that are not bound 
 * to any object.
 */  

/**
 * Even though it appears this refers to the object where it is defined, 
 * it is not until an object invokes the 'this' Function that 'this' 
 * is actually assigned a value. And the value it is assigned is based 
 * exclusively on the object that invokes the 'this' Function. 
 * 'this' has the value of the invoking object in most circumstances. 
 */  