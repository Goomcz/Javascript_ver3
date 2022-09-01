let numbers = [2,5,6,7];
let checkInteger = [0,1,2,3,4,5,6,7,8,9];
let XnumbersSum = 0;
for(let i=0; i<checkInteger.length; i++){
    if(numbers.includes(checkInteger[i]) == false){
        XnumbersSum += checkInteger[i];
    } else{
        continue;
    }
}
console.log(XnumbersSum); // Result : 25


