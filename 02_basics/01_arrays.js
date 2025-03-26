let myArr=new Array(0,1,2,3,4,5)
let arr1=[1,2,3,4,5]

console.log(myArr);

const newArr=arr1.join();
console.log(newArr);
console.log(typeof newArr);

//slice,splice
//splice->disturbes original array
//slice->doesnot disturber original array
console.log("A ",myArr);
let myn1=myArr.slice(1,3);
console.log(myn1);

console.log("B ",myArr);
let myn2=myArr.splice(1,3);
console.log(myn2);

console.log("C ",myArr);

