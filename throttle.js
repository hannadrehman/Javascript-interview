/**
 * Throttling is a straightforward reduction of the trigger rate. It will cause the event listener 
 * to ignore some portion of the events while still firing the listeners at a constant 
 * (but reduced) rate.
 */

 /**
  * ex you want to fire event on scroll change. imaging you scrolled to 1000px
  * there will be approx 1000 function calls. if these functions are 
  * heavy you will get huge performance impact. 
  * in this kind of scenerio we would throttle and let function call at particular interval
  * only
  */
 /**
  * Second example is if there is a function which gets executed on click of a button
  * and user can click a thousand time causing the function to be called thousand time
  * suppose there is an api call attached to this function. this will cause a 100 api
  * calls which may kill the server.
  */

  /**
   * Throttling can be implemented several ways. You can throttle by the number of events triggered, 
   * or by the rate (number of events per unit time), or by the delay between two handled events. 
   * The last option is probably the most common and also relatively easy to implement, 
   * so we’ll show it here. You can work out the other two on your own.
   */

   // ES6

   function throttle(delay,fn){
       console.log('initialized')
       let lastcall=0;
       const args= [...arguments]
       return ()=>{
        const now = new Date().getTime()
        // console.log(now-lastcall)
        if(now-lastcall<delay){
            console.log('throttled')
            return
        }
        lastcall=now
        return fn(...arguments)
       }
   }

   const handler = ()=>{
       console.log('done')
   }
   const manager = throttle(100,handler);
   let count =0;
//    uncomment to test

//    const tt= setInterval(()=>{
//         if(count>10){
//             clearInterval(tt)
//         }
//         else{
//             count++;
//             manager()
//         }
//     },50)

// ES5
function oldThrottle(delay,cb){
    console.log('initialized')
    var lastCall=0;
    var args = Array.prototype.slice.call(arguments,0)
    return function(){
        var innerArgs=Array.prototype.slice.call(arguments,0)
        var now = new Date().getTime()
        if(now-lastCall<delay){
            console.log('throttled')
            return
        }
        lastCall=now;
        cb.apply(arguments,args.concat(innerArgs))
    }
}

const handleer= () =>{
    console.log('done')
}
const managerrr = oldThrottle(100,handler)

   const tt= setInterval(()=>{
        if(count>10){
            clearInterval(tt)
        }
        else{
            count++;
            managerrr()
        }
    },50)