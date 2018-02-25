/**
 * Debouncing enforces that a function not be called again until a certain amount of time 
 * has passed without it being called. As in "execute this function only if 100 milliseconds 
 * have passed without it being called."
 */
/**
 * means you if action occurs simultaniously with different arguments,
 * we need to call it with the last argument only. so we wait for some time.
 * if action stops we call the functionality
 * EX autocomplete in search. you dont want to call api for every key press.
 * we wait for say 200ms if user stops pressing keys. we then call the api 
 */

 /**
  * Debouncing can be implemented using setTimeout() and clearTimeout(). 
  * It normally takes a value in milliseconds that represents the wait period before the 
  * listener is triggered.
  */

//   ES6

function debounce(delay,cb){
    console.log('initated')
    let timer=null;
    return (...argument)=>{
        if(timer){
            console.log('debounced')
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            console.log('delay met')            
            cb(...arguments);
            timer=null;
        },delay);
    }
}

// uncomment to test

// let count=0
// var handler=()=>{
//     console.log('finished')
// }
// var manager=debounce(100,handler)

// const tt= setInterval(()=>{
//     if(count>10){
//         clearInterval(tt)
//     }
//     else{
//         count++;
//         manager()
//     }
// },59)


// ES5

function oldDebounce(delay,cb){
    var args= Array.prototype.slice.call(arguments,0);
    var timer=null;
    return function(){
        if(timer){
            console.log('debounced');
            clearTimeout(timer);
        }
        timer=setTimeout(function(){
            console.log('final call');
            cb(args)
            timer=null;            
        },delay)
    }
}

let count=0
var handler=(x,y)=>{
    console.log('finished')
    console.log(x,y)
}
var manager=oldDebounce(100,handler)

const tt= setInterval(()=>{
    if(count>10){
        clearInterval(tt)
    }
    else{
        count++;
        manager()
    }
},59)