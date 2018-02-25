/**
 * Symbols are a new primitive type in ECMAScript 6. They are created via a factory function:
 * Every time you call the factory function, a new and unique symbol is created. 
 * The optional parameter is a descriptive string that is shown when printing the symbol 
 * (it has no other purpose):
 */

/** *
 * Symbols are mainly used as unique property 
 * keys – a symbol never clashes with any other property key (symbol or string)  
 */  

 var mystery = Symbol()

//  var oops = new Symbol() // type error 

var _mystery = Symbol('this is a descriptive description') // param is only for debugging

/**
 * Symbols are immutable. Just like numbers or strings. 
 * Note however that symbols are unique, unlike primitive numbers and strings.
 */

console.log(Symbol() === Symbol()) // <- false
console.log(Symbol('foo') === Symbol('foo')) // <- false

console.log(typeof Symbol())// <- 'symbol'
console.log(typeof Symbol('foo'))// <- 'symbol'

/**
 * You can access local symbols by obtaining a reference to them directly
 * You can place symbols on the global registry and access them across realms
 * “Well-known” symbols exist across realms – but you can’t create them and 
 * they’re not on the global registry
 * --------------
 * What the heck is a realm, you say? A realm is spec-speak for any execution 
 * context, such as the page your application is running in, or an <iframe> within your page.
 */

 /**
  * There’s two methods you can use to add symbols to the runtime-wide symbol registry: 
  * Symbol.for(key) and Symbol.keyFor(symbol).
  */

  /**
   * SYMBOL.FOR(key)
   * This method looks up key in the runtime-wide symbol registry. 
   * If a symbol with that key exists in the global registry, that symbol is returned. 
   * If no symbol with that key is 
   * found in the registry, one is created. That’s to say, Symbol.for(key) is idempotent.
   */
var key1 = Symbol.for('hannad');
console.log(key1)
var key2 = Symbol.for('hannad');
console.log(key2)
console.log(key1==key2) // true because key created time  hannad was present. and it returned it

/**
 * the global symbol registry however keeps track of symbols by a key. 
 * Note that your key will also be used as a description
 */


 /**
   * SYMBOL.KEYFOR(key)
   * Given a symbol symbol, Symbol.keyFor(symbol) returns the key that was associated 
   * with symbol when the symbol was added to the global registry
  */

  var symbol1 = Symbol.for('key1');
  console.log(Symbol.keyFor(symbol1)) //key1


//   HOW TO GET SYBOLS FROM OBJECTS

var obj={
    [Symbol()]: 'plain',
    [Symbol('key')]: 'with a key',
    [Symbol.for('global')]: 'with a global',
    what:'ever'
}
console.log('------------------')
console.log(Object.keys(obj))
for(var k in obj){
    console.log(k)
}

// Obviously this wont work because symbols cant be fetched normally/

console.log(Object.getOwnPropertySymbols(obj)) // works fineee
console.log(typeof Object.getOwnPropertySymbols(obj)) // works fineee

for(var s in Object.getOwnPropertySymbols(obj)){ // will print undefined because its a symbol itrator 
    console.log(obj[s])
}

for(var k of Object.getOwnPropertySymbols(obj)){ // works fine
    console.log(obj[k])
}
console.log('--------')

/**
 * USE CASES
 * 1.NAME CLASHES : You can use symbols to avoid name clashes in property keys, that way there is no risk of
 *   overriding the property of an object
 * 2.PRIVACY : symbols are all invisible to reflection methods [getting data from object]. but they are not
 *   private and can be easily obtained by getOwnPropertySymbols() method
 * 3.DEFINING PROTOCOL: I think the biggest use case for symbols is exactly what the ES6 implementers 
 *   use them for: defining protocols – just like there’s Symbol.iterator 
 *   which allows you to define how an object can be iterated.
 */