let segNumber = new RegExp(/[0-9]/g);
let segString = new RegExp(/[a-z]/g);
let segBlank = new RegExp(/[' ']{2,}/g);
let numberMap = new Map([['one','1'], ['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],
['seven','7'],['eight','8'],['nine','9'],['zero','0']]);

let s = 'one4seveneight';

console.log(s);

let sNumber = s.replace(segString,' ');
let sString = s.replace(segNumber,' ');
    sString = sString.replace(segBlank, ' ');
console.log(sNumber);
console.log(sString);


let sNumberArray = [...sNumber.replace(segBlank,' ')];
let sStringArray = sString.split(' '); 

console.log(sNumberArray);
console.log(sStringArray);
console.log(sStringArray.length);

for(let i=0; i<sStringArray.length; i++){
if(numberMap.has(sStringArray[i])){
    sStringArray[i]=numberMap.get(sStringArray[i]);
}
} if(sStringArray[0]==''){
    sStringArray.shift();
} if(sStringArray[sStringArray.length-1]==''){
    sStringArray.pop();
}

let sStringArrayTonumber = sStringArray;
console.log(sStringArray);

for(let j=0; j<sNumberArray.length; j++){
    let k=0;
    if(sNumberArray[j]==' '){
        sNumberArray[j]=sStringArrayTonumber[k];
        k++;
    }
} console.log(sNumberArray);

let sReturned = sNumberArray.join('');
console.log(sReturned);



