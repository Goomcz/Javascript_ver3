let a = ['a','b','c'];
let b = ['c','d','e'];
let count = 0;
if(a.includes(b[0]) == true){
    console.log('good');
    count+=1;
    console.log(count);
}

a.push(1);
console.log(a);

let c = [1];
let d = [2];
let e = c.concat(d);
console.log(e);

let f = [1,2,3,4,5,6,7,8,9,10];
let totalSum = f.reduce(function add(sum, currValue){
    return sum + currValue;
},0);
console.log(totalSum);

