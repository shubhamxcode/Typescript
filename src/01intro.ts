// let x:number=23
// console.log(x)

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

// function shubham(fn:()=>void){
//     setTimeout(fn, 1000);
// } 
// shubham(() => {
//     console.log( typeof shubham,"shubham");
// });


// function shubham(fn:()=>void){
//     setTimeout(fn,1000)
// }
// const sher:()=>void=()=>{
//     console.log("hey");
//     return 5;
// }
// shubham(sher)


// ----interface---- It provides a way to define the structure of data in a clear and concise manner, enabling type safety and consistency throughout the code."



// interface user{
//     firstname:string,
//     lastname:string,
//     age:number
//     email?:string //optional 
// }

// function islegal(user:user){
//     if (user.age>18) {
//         console.log("legal");
        
//     } else {
//         console.log("illegal");
        
//     }
// }

// islegal({
//     firstname:"shubham",
//     lastname:"varsheny",
//     age:19
// })

// TYPES--- almost same as interface but types cannot use as impliment classes but interface does but types let you do few extra things

// type users={
//     firstname:string,
//     lastname:string,
//     age:number
// }
// function islegal(users:users){
//     if (users.age>20) {
//         console.log("yes");
        
//     } else {
//         console.log('no');
        
//     }
// }
// islegal({
//     firstname:"aditya",
//     lastname:"varshney",
//     age:22
// })

// mutiple data type using type provide  (UNION) 
// type greetuser=number|string

// const greet=(greet:greetuser)=>{
    
// }

// greet(1)
// greet("shubham")

//intersection ------part of type


// type employe={
//     name:string,
//     startDate:Date;
// }

// interface manager{
//     name:string,
//     department:string;
// }

// type Teachlead=employe & manager


// const shubham:Teachlead={
//      name:"shubham",
//      startDate: new Date(),
//      department:"huehue"
// }
// console.log(shubham);

// interface you can use in extend a  class and type provide few fetures method like union and intersection we cannot use intterface when we use & or |


// const x:number=23;
// console.log(x);
// const greet=function (firstname:string){
//     console.log("Hello world",firstname)
// }
// greet("shubham")


// function isvaliduser(user:number):boolean{
//     if (user>=18) {
//         return true
//     }else{
//         return false
//     }
// }

// const userage=isvaliduser(18)

// console.log(userage);


// function greeuserwiththerename(sherathesikar:()=>void){
//   setTimeout(sherathesikar,2000)
// }

// greeuserwiththerename(()=>{
//     console.log("hello shubham")
// })

// interface User{
//     age:number
// }
// function islegaluser(user:User){
//     if (user.age>18) {
//         return true
//     }else{
//         return false
//     }
// }

// console.log(islegaluser({
//     age:23
// }));

// type userid={
//     id:number | string
// }

// function useriddata(user:userid){

// }
// useriddata({id:23})