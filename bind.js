/**
 * We use the Bind () method primarily to call a function with the 'this' 
 * value set explicitly. It other words, bind () allows us to easily set 
 * which specific object will be bound to this when a function or 
 * method is invoked.
 */

 function abc(){
     console.log(this.hello)
 }
 var obj={
    hello:'hello'
 }

 abc=abc.bind(obj);
 
 abc()

//  bind can also be used to curry the functions

 function greet (gender, age, name) {
    const salutation = gender === "male" ? "Mr. " : "Ms. ";
    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}
const greetAnAdultMale = greet.bind (null, "male", 45,'john');
console.log(greetAnAdultMale('how'))