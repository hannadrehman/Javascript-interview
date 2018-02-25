/**
 * ES6 introduces a new mechanism for traversing data: iteration. Two concepts are central to iteration:
 * 1.An iterable is a data structure that wants to make its elements accessible to the public. It does 
 *   so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators.
 * 2.An iterator is a pointer for traversing the elements of a data structure (think cursors in databases).
 * 
 * The following values are iterable:
 * Arrays
 * Strings
 * Maps
 * Sets
 * DOM data structures (work in progress)
 * Plain objects are not iterable
 */
    //The iterable protocol says that an object should return a function iterator whose key is Symbol.iterator.
    //typeof g[Symbol.iterator] // function
   
    //The iterator protocol says that the iterator should be an object pointing to the next 
    //element of the iteration. This object should contain a function called next 
    // typeof iterator.next // function

 const arr= [1,2,3,];
 console.log(typeof arr[Symbol.iterator]) //return a function
 const itr = arr[Symbol.iterator]()
 console.log(itr.next()) //1
 console.log(itr.next()) //2
 console.log(itr.next())//3
 console.log(itr.next()) // undefined , done=false
 console.log(itr.next().done)
 
 console.log('----------------')

 for(let x of arr){
     console.log(x)
 }

//  create your own itrator .. implelemtation

const iterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                if (step <= 2) {
                    step++;
                }
                switch (step) {
                    case 1:
                        return { value: 'hello', done: false };
                    case 2:
                        return { value: 'world', done: false };
                    default:
                        return { value: undefined, done: true };
                }
            }
        };
        return iterator;
    }
};

for(let v of iterable){
    console.log(v)
}

// something that makes more sense

function itrateFor(){
    const args=[...arguments]
    const iterator={
        [Symbol.iterator](){
         const itr={
            index:0,
            next(){
                if(this.index<args.length){
                   const itrated={value:args[this.index],done:false}
                   this.index++;
                   return itrated
                }
                return {value:null,done:true} 
               }
         }
         return itr
        }    
    }
    return iterator
}
console.log('--------------')

for(const k of itrateFor('1,2,3','ma,s')){
    console.log(k)
}
const itrs= itrateFor(1,2,3,4)[Symbol.iterator]()
console.log(itrs.next())