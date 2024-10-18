// generics enables you to create camponent that work with any data type while still providing compile-time type safety
// type input=number|string
// function harkirat(user:input[]){
//     return user;
// }
// const value=harkirat(["shubham"])//we cannot apply to uppecase method because it is number or string not only string 
// console.log(value);
// const identity=<T>(args:T):T=>{
//     return args
// }
// let Output1=identity<string>("this is string")
// let Output2=identity<number>(131)
// console.log(Output1.toUpperCase());
// function getitem<T>(arr:T[]){
//     return arr[0];
// }
// let Output=getitem(["shubham"])
// console.log(Output.toUpperCase());
// const inter=<T>(anything:T[])=>{
//     return anything[0];
// }
// interface anythinganywherestrore{
//     name:string
// }
// const el=<anythinganywherestrore>inter([{name:"shubham"}])
// console.log(el.name);
