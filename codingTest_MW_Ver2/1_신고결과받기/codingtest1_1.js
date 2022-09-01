const id_list = ['muzi','frodo','neo','apeach'];
const report = ['muzi frodo','frodo neo','neo apeach','apeach muzi','muzi neo', 'frodo muzi','frodo muzi'];
const k = 2;

function solution (id_list, report, k) {    
    let set = new Set(report);
    let newReport = [...set];
    
    return newReport; 
}
console.log(newReport);






