// let x:number=23
// console.log(x)
function islegal(users) {
    if (users.age > 20) {
        console.log("yes");
    }
    else {
        console.log('no');
    }
}
islegal({
    firstname: "aditya",
    lastname: "varshney",
    age: 22
});
