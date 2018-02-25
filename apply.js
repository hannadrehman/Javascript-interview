/**
 * the apply function in particular allows us to execute a function 
 * with an array of parameters, such that each parameter is passed 
 * to the function individually when the function executes—
 * great for variadic functions; a variadic function takes varying 
 * number of arguments, not a set number of arguments as most 
 * functions do.
 */

/**
 * Just as in the bind () example, we can also set the this value 
 * when invoking functions by using the Apply or Call methods. 
 * The first parameter in the call and apply methods set the this 
 * value to the object that the function is invoked upon.
 */  
var avgScore = "global avgScore";
//global function​
function avg(arrayOfScores) {
    // Add all the scores and return the total​
    var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
        return prev + cur;
    });
    // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
    this.avgScore = sumOfScores / arrayOfScores.length;
}
var gameController = {
    scores  : [20, 34, 55, 46, 77],
    avgScore: undefined
}
avg(gameController.scores);
// Proof that the avgScore was set on the global window object​
console.log (avgScore); // 46.4​
console.log (gameController.avgScore); // null​

avgScore = "global avgScore";
// To set the "this" value explicitly, so that "this" is bound to the gameController,​
// We use the call () method:​
avg.call (gameController, gameController.scores);
console.log (avgScore); //global avgScore​
console.log (gameController.avgScore); // 46.4​


function sum(arg1,arg2,arg3){
    console.log(arg1+arg2+arg3)
}
sum.apply(null,[1,2,3,4,5,6])

var arr=[];
arr.push.apply(arr,[1,23,4,5,6,5,3,7,8,6]);
console.log(arr)

// call is same, only diff is we pass arguments to as comma seperated   