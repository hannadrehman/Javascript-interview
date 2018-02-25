//Can you name two common uses for closures?
/**
 * What is a Closure?
 * A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function’s scope
 * from an inner function. In JavaScript, closures are created every time 
 * a function is created, at function creation time.
 * -------------------------------------------------
 * To use a closure, simply define a function inside another function 
 * and expose it. To expose a function, return it or pass it to another 
 * function.
 * Among other things, closures are commonly used to give objects data 
 * privacy
 * --------------------------------------------------
 * In JavaScript, closures are the primary mechanism used to enable 
 * data privacy. When you use closures for data privacy, the enclosed 
 * variables are only in scope within the containing (outer) function. 
 * You can’t get at the data from an outside scope except through the 
 * object’s privileged methods. In JavaScript, any exposed method 
 * defined within the closure scope is privileged. For example:
 */
const getVal = (val) => {
    return {
      get: () => val
    };
  };

const first=getVal(1);
console.log(first) // object;
const value=first.get();
console.log(value)// 1 
 
/**
 * In the example above, the `.get()` method is defined inside the scope 
 * of `getVal()`, which gives it access to any variables from `getVal()`, 
 * even after the `getval()` function is executed get() will still retain
 * the variables of the parent function. ex below
 */ 

const getAgainVal = (val) => {
    const someVariable=2;
    return {
      get: () => val*2
    };
  };
console.log('--------------------')
const newFirst=getAgainVal(1);
console.log(newFirst) // object;
const newValue=newFirst.get();
console.log(newValue)// 2 

// -------------------------------------------------------------------

const car= function(name){
  return function(what){
    return name + what;
  }
}

var safari=car('safari');
console.log(safari); // function.
const actualCar= safari(' han');
console.log(actualCar);

//--------------------------
/**
 * Common gotchas in closures
 * 1.function inside loop
 * */ 

 for(var i=0;i<3;i++){
   setTimeout(function(){
     console.log(i); //should print 0,1,2
    //  but prints 3,3,3
   },0)
 }
/**
 * this happens because javascript is single threaded.
 * it keeps every thing in the event loop. so that means
 * it maintains a queue for what to do.
 * The closure created in each loop iteration is queued 
 * to run as soon as the rest of the current execution 
 * context finishes and CPU time is returned to the event loop.
 * here when a closure is created. the setTimeout behaves
 * as a defered function, and waits until after the loop
 * finishes running.y that point the final value of i is ‘3’.
 * Keep in mind that i was declared before the loop started. 
 * It’s scope is external to the loop.
 */
console.log('--------------------')
for(var i=0;i<3;i++){
  var j = i;
  setTimeout(function(){
    console.log(j); //should print 0,1,2
   //  but prints 2,2,2
  },0)
}bootstrap grid system and loader?
/**
 * Now we’re declaring a variable j inside the loop that is a 
 * copy of i. Well, it turns out that the scope of j here is also 
 * external to the loop. It will continue to exist outside the loop 
 * and thus only ever has one value which changes as the loop iterates. 
 * This in turn means that when a deferred closure runs, the latest 
 * value will be the one that all the closures from this loop end 
 * up with. 
 */ 

//  FIX
console.log('--------------------')
for(var i=0;i<3;i++){
  const j = i; // yes this will fix it. 
  // const and let are awesome.
  setTimeout(function(){
    console.log(j); //should print 0,1,2
  },0)
}

/**
 * THE TRICK IS TO IMMEDIATELY EXECUTE THE BLOCK OF CODE. HOW?
 * 
 * all you have to do is wrap your 
 * closure in a closure in which you define new variables which 
 * capture the current value of the variables that change on each 
 * iteration. Got that? The trick to capturing the variables is making 
 * sure your outer closure executes immediately during the current 
 * iteration of the loop. You can use one of these two similar 
 * approaches:
 */ 

console.log('--------------------')
for(var i=0;i<3;i++){
  (function(v){
    setTimeout(function(){
      console.log(v);  // 0,1,2
    },0)
  })(i)
}

console.log('--------------------')
for(var i=0;i<3;i++){
  (function(){
    var v=i;
    setTimeout(function(){
      console.log(v);  // 0,1,2
    },0)
  })()
}