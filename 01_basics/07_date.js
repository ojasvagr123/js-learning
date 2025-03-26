// Dates

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let createDate=new Date(2023,0,23)
console.log(createDate.toDateString());

//time-stamp
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/100));//time in sec from 1 jan 1970

let newDate=new Date();
console.log(newDate.getDay());

newDate.toLocaleTimeString('default',{
    weekday:"long",
})
