/**
 * What’s the Difference Between Class & Prototypal Inheritance?
 */

/**
 * Class Inheritance: A class is like a blueprint , a description 
 * of the object to be created. Classes inherit from classes and 
 * create subclass relationships
 * -----------------------------
 * Instances are typically instantiated via constructor functions 
 * with the `new` keyword. Class inheritance may or may not use the 
 * `class` keyword from ES6. Classes as you may know them from languages
 * like Java don’t technically exist in JavaScript. 
 * Constructor functions are used, instead. The ES6 `class` keyword 
 * desugars to a constructor function
 */ 

 class Hannad {}
 console.log(typeof Hannad) //function

/**
 * Class Inheritance: instances inherit from classes 
 * (like a blueprint — a description of the class), 
 * and create sub-class relationships: hierarchical class taxonomies. 
 * Instances are typically instantiated via constructor functions with 
 * the `new` keyword. Class inheritance may or may not use the `class` 
 * keyword from ES6.
 */
    class test {
        constructor(){}
        abc = 123; 
    }
    const a = new test()
/**
 * Prototypal Inheritance: instances inherit directly from other objects. 
 * Instances are typically instantiated via factory functions or 
 * `Object.create()`. 
 * Instances may be composed from many different objects, 
 * allowing for easy selective inheritance.
 */
 var abc = {a:2}
 var t = Object.create(abc);  