/**
 * Currying refers to the process of transforming a function with multiple params
 * into the same function with less params. 
 * The curried effect is achieved by binding some of the arguments to the first function invoke, 
 * so that those values are fixed for the next invocation. 
 * Here’s an example of what a curried function looks like:
 */

function animal(first){
    return function(second){
        console.log('i love '+first+' and '+second)
    }
  }
 
  var ani=animal('jack');
  ani('rose')

/**
 * the other way by which we can achieve the same is by using the 'bind' method. 
 * we know that bind allows to borrow the methods. we can bind context as well as params to the 
 * borrowed method. also keep in mind is that bind is used to call the method later. it will
 * not do the immediate execution
 */

 function bindTest(one,two){
     console.log('i love '+one +' and '+two)
 }

 var temp = bindTest.bind(null,'jack') // jack becomes the first param
 temp('jill')

