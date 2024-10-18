var direaction;
(function (direaction) {
    direaction["enter"] = "enter";
    direaction["down"] = "down";
    direaction["left"] = "left";
    direaction["right"] = "right";
})(direaction || (direaction = {}));
function shubham(userclick) {
    if (userclick === direaction.enter && direaction.down && direaction.left && direaction.right) {
        console.log("hey shubham you click");
    }
    else {
        console.log("oops you click other key");
    }
}
console.log(direaction);
shubham(direaction.enter);



