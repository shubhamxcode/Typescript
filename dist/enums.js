var direaction;
(function (direaction) {
    direaction["backsapce"] = "backsapce";
    direaction["down"] = "down";
    direaction["left"] = "left";
    direaction["right"] = "right";
})(direaction || (direaction = {}));
function shubham(userclick) {
    if (userclick === direaction.backsapce && direaction.down && direaction.left && direaction.right) {
        console.log(`hey shubham you click ${userclick}`);
    }
    else {
        console.log("oops you click other key");
    }
}
shubham(direaction.backsapce);
shubham(direaction.down);
shubham(direaction.left);
shubham(direaction.right);
// const app=express();
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
