// Let’s start with an example.
// This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:

var x =`
 <div onclick="alert('The handler!')">
   <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
 </div>
`
//Isn’t it a bit strange? Why the handler on <div> runs if the actual click was on <em>?

// Bubbling
// When an event happens on an element, it first runs the handlers on it, 
// then on its parent, then all the way up on other ancestors.

//The process is called “bubbling”, because events “bubble” from the inner element
// up through parents like a bubble in the water.

var b = `
        <form onclick="alert('form')">FORM
            <div onclick="alert('div')">DIV
                <p onclick="alert('p')">P</p>
            </div>
        </form>
`
//here if we click on p will get. p > div > form because event bubbled up

//* event.target
// A handler on a parent element can always get the details about where it actually happened.
// The most deeply nested element that caused the event is called a target element, accessible as event.target.
// event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
// event.currentTarget – is the “current” element, the one that has a currently running handler on it.

// Stopping bubbling

// A bubbling event goes from the target element straight up. Normally it 
// goes upwards till <html>, and then to document object, and some events even reach window, 
// calling all handlers on the path.

// But any handler may decide that the event has been fully processed and stop the bubbling.
// The method for it is event.stopPropagation().
// For instance, here body.onclick doesn’t work if you click on <button>:

var c = `
<body onclick="alert('the bubbling doesn't reach here')">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
`