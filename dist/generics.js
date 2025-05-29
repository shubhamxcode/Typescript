function harkirat(user) {
    return user;
}
const value = harkirat(["shubham"]); //we cannot apply to uppecase method because it is number or string not only string 
console.log(value);
const identity = (args) => {
    return args;
};
let Output1 = identity("this is string");
let Output2 = identity(131);
console.log(Output1.toUpperCase());
function getitem(arr) {
    return arr[0];
}
let Output = getitem(["shubham"]);
console.log(Output.toUpperCase());
const inter = (anything) => {
    return anything[0];
};
const el = inter([{ name: "shubham" }]);
console.log(el.name);
