/**
 * The Singleton Pattern limits the number of instances of a particular object to just one. 
 * This single instance is called the singleton.Singletons are useful in situations where system-wide 
 * actions need to be coordinated from a single central place. An example is a database connection pool. 
 * The pool manages the creation, destruction, and lifetime of all database connections for the entire 
 * application ensuring that no connections are 'lost'.
 * Singletons reduce the need for global variables which is particularly important in JavaScript 
 * because it limits namespace pollution and associated risk of name collisions.
 */

 /**
  * The Singleton object is implemented as an immediate anonymous function (IIFE). 
  * The function executes immediately by wrapping it in brackets followed by two additional brackets. 
  * It is called anonymous because it doesn't have a name.
  * The 'getInstance' method is Singleton's gatekeeper. It returns the one and only instance of 
  * the object while maintaining a private reference to it which is not accessible to the outside world.
  * The 'getInstance' method demonstates another design pattern called 'Lazy Load'. Lazy Load checks if 
  * an instance has already been created; if not, it creates one and stores it for future reference. 
  * All subsequent calls will receive the stored instance. Lazy loading is a CPU and memory saving 
  * technique by creating objects only when absolutely necessary.Singleton is a manifestation of a 
  * common JavaScript pattern: the Module pattern. Module is the basis to all popular JavaScript 
  * libraries and frameworks (jQuery, Backbone, Ember, etc.).
  */
  var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

console.log(Singleton.getInstance())
console.log(Singleton.getInstance())
console.log(Singleton.getInstance()===Singleton.getInstance())

// ES6 

// 
const singleton = Symbol();
const singletonEnforcer = Symbol();

class SingletonEnforcer {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    this._type = 'SingletonEnforcer';
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new SingletonEnforcer(singletonEnforcer);
    }

    return this[singleton];
  }

  singletonMethod() {
    return 'singletonMethod';
  }

  static staticMethod() {
    return 'staticMethod';
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}


const instance1 =  SingletonEnforcer.instance;
const instance2 = SingletonEnforcer.instance;

console.log(instance1,instance1.type)
console.log(instance2,instance2.type)

instance2.type='hannad';

console.log(instance1,instance1.type)
console.log(instance2,instance2.type)
