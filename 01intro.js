"use strict";
// let x:number=23
// console.log(x)
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("timers/promises");
// function greetuser(firstname:string, lastname:string,age:number){
//     console.log(`hello ${lastname}`)
// }
// greetuser("shubham","varshney",23)
// function sum(num1:number,num2:number):number{
//     return num1+num2
// }
// console.log(sum(12,23))
// function users(age:number):boolean{
//     if (age>18) {
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(users(13))
// let user1:number = 12
// function user():boolean{
//     if (user1>18) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(user())
function run(fn) {
    (0, promises_1.setTimeout)(fn, 2000);
}
run(function () {
    console.log("wdwed");
});
