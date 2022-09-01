let numbers = [2,5,6,7,1,3,4,5];
let checkInteger = [2,0,1,2,3,4,5,6,7,8,9];
let XnumbersSum = 0;

checkInteger.forEach(ele => {
    if(numbers.includes(ele) === false){
        XnumbersSum += ele;
    }
});

console.log(XnumbersSum); // Result : 17