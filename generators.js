/**
 * Generators, a new feature of ECMAScript 6, are functions that can be paused and resumed. 
 * This helps with many applications: iterators, asynchronous programming,
 */

 /**
  * The big deal about generators is that they are functions that can 
  * suspend its execution while maintaining the context.
  * This behaviour is crucial when dealing with executions 
  * that need to be paused, but its context maintained in order to recover it in the future.
  */

  function* firstClassGen(){
      yield 'foo'
  }

//    how to call ?

const genRef= firstClassGen();
console.log(genRef) // object
console.log(genRef.next()) // {value:'foo',done:false} 
console.log(genRef.next()) // {value:undefined,done:true}
//Calling our generator function creates new generator that we can use to control the process through next function.
//Running next will execute our generator’s code until an yield expression is reached. yeild is like a retrun
// but it will not stop the function. it will pause the function untill the next yeild is reached

/**
 * yield
 * yield was born with generators and allow us to emit values. 
 * However, we can only do this while we are inside a generator.
 * If we try to yield a value on a callback, 
 * for instance, even if declared inside the generator, we will get an error.
 */

//  function* generator() {
    
//     ['foo','bar'].forEach((e)=>{
//         yield e  // syntax error
//     })

//     // We can't use 'yield' inside a non-generator function.
// }


/**
 * yeild* 
 * we can call a generator function inside a generator function
 * this is achieved by yield* keyword
 */
console.log('-------------------\n')
 function* parnetGen(){
     yield 'inside parent'
     yield 'done parent execution'
 }
 function* childGen(){
     yield 'inside child'
     yield* parnetGen()
     yield 'done child execution'
 }

 const cRef=childGen();
 console.log(cRef.next()) // value:'inside child'
 console.log(cRef.next()) // value: 'inside parent'
 
 console.log(cRef.next()) // value: 'done parent execution'
 console.log(cRef.next()) // value: 'done child execution'
 console.log(cRef.next()) // done: true
 
 console.log('\n-------------------\n')

//  works fine in itrators also.
function* nextGen(){
    yield '1'
    yield* childGen()
    yield '2'
}
for(const c of nextGen()){
    console.log(c)
}

console.log('\n-------------------\n')

//even this is also possible

function* itrateInGen(){
    yield 'a'
    yield 'b'
    for(const c of nextGen()){
        yield c
    }
    yield 'c'
}

for(const x of itrateInGen()){
    console.log(x)
}

//The iterable protocol says that an object should return a function iterator whose key is Symbol.iterator.
const g = itrateInGen()
typeof g[Symbol.iterator] // function
//The iterator protocol says that the iterator should be an object pointing to the next 
//element of the iteration. This object should contain a function called next 
const iterator = g[Symbol.iterator]()
typeof iterator.next // function

/**
 * Return
 * We can add a return statement to our generator, however return will behave 
 * differently according to the way generators’ data is iterated.
 */

function* generatorWithReturn() {
    yield 'foo'
    yield 'bar'
    return 'hannad'
    yield 'should not be printed'
}

var gc = generatorWithReturn()

console.log(gc.next()) // { value: 'foo', done: false }
console.log(gc.next())  // { value: 'bar', done: false }
console.log(gc.next())  // { value: 'done', done: true }
console.log(gc.next())  // { value: undefined, done: true }

console.log('\n------------------\n')

/**
 * Generators as Data Consumers
 * Besides generators being data producers, 
 * through yield, they also have the ability to consume data using next.
 */

function* generatorDataConsumer() {
    //A
    console.log('Ready to consume!')
    while (true) {
        const input = yield; // B
        console.log(`Got: ${input}`)
    }
}
var gxv = generatorDataConsumer()
// (2)
console.log(gxv.next()) // value: undefined ,done :false
// 3
console.log(gxv.next('hi')) // value: hi ,done :false
console.log(gxv.next('hannad')) // value: hannad ,done :false

//Generator Creation 
    //At this stage we are creating our generator gxv
    //Our execution stops at point A.
//First next (2)
    //The first execution of next gets our generator to be executed until the first yield statement.
    //On this first execution any value sent through next is ignored. 
    //This is because there’s no yield statement until the first yield statement 👹
    //Our execution suspends at B waiting for a value to be filled to yield.
//Next next (3)
    //On the next executions of next our generator will run the code until the next yield.
    // In our case, it logs the value that is got through yield (i.e. Got: foo) and it gets suspended again on yield.

