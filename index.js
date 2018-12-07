// var os = require("os");
// var message = "The platform is ";

// function main(){
//    console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Here is hello world and goodbye world</h1><hr></h1><ul><li>Hello world</li><li>GoodBye world</li></ul>");
// });

// app.listen(5321, function(){
//    console.log("Example is running on port 5321");
// });

var express = require("express");
var app = express();
// app.get("/google", function(req, res){
//     res.redirect('http://google.com');
// })
app.get("/google/:search", function(req, res){
    var search = req.params.search;
    res.redirect("http://google.com/search?q="+search)
})
app.get("/*", function(req, res){
    res.send("<h1>Error 404</h1><hr><p>this page not exists</p>");
})


 app.listen(3000, function(){
    console.log("Example is running on port 3000");
});
