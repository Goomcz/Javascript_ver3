let new_idArray = 'A.CD.@dfd_-/#%1234';
let new_idArrayStep1 = new_idArray.toLowerCase();
    console.log(new_idArrayStep1);

let reg= new RegExp(/[^0-9a-z-_.]/,'g');
let new_idArrayStep1_1 = new_idArrayStep1.replace(reg,'');
console.log(new_idArrayStep1_1);

let new_idArrayStep1_2 = new_idArrayStep1_1.split('');
console.log(new_idArrayStep1_2);

let new_idArray_test = [];
console.log(new_idArray_test.length);