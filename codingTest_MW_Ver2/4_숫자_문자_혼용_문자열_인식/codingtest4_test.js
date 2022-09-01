let segNumber = new RegExp(/[0-9]/g);
let segString = new RegExp(/one|two|three|four|five|six|seven|eight|nine|zero/g);
let numberMap = new Map([['one','1'], ['two','2'],['three','3'],['four','4'],['five','5'],['six','6'],
['seven','7'],['eight','8'],['nine','9'],['zero','0']]);

let s = '123';
    console.log(s);

    if(s==s.replace(segString,'')){
        var answer = Number(s);
    }


// s 가 숫자만으로 이루어진 값이 아니라면 문자열만을 추출해서 해당하는 숫자로 바꾸기 위한 과정
else{
let sString = s.replace(segNumber,'');
    console.log(sString);

let sStringArray = sString.match(segString);
console.log(sStringArray);
console.log(sStringArray.length);



    for(let i=0; i<sStringArray.length; i++){
    if(numberMap.has(sStringArray[i]) == true){
        sStringArray[i]=numberMap.get(sStringArray[i]);
    }
} 
let sStringToNumberArray = sStringArray;
console.log(sStringToNumberArray);

// 문자열만을 추출해서 해당하는 숫자로 바꾸고, 배열로 바꾸기 까지 완료


// 문자는 □로 하여 숫자와 함께 추출하여 배열을 만듦
let sNumberArray = [...s.replace(segString,'□')];
console.log(sNumberArray);

let k=0;
for(let j=0; j<sNumberArray.length; j++){
    
    if(sNumberArray[j]=='□'){
        sNumberArray[j]=sStringToNumberArray[k];
        k++
    }
} console.log(sNumberArray);

let sReturned=sNumberArray.join('');
console.log(sReturned);
}




