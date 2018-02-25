const a=[1,2,3,4,5,6,7,78,9]
a.reduce((accum,current,index,arr)=>{
    return accum+current
})

var testOb={
    a:{
        b:{
            c:{
                d:{
                    e:'heh'
                }
            }
        }
    }
}
const id='a.b.c.d.e';
let value={...testOb}
let count=0;
const arr= id.split('.').reduce((accum,curr)=>{
    value=value[accum]
    count+=1
    return curr
});
console.log(value)