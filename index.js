var express = require("express");
var app = express();
var path = require("path");

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(_dirname+'/public/index.html'));
});

app.get('/aboutme',function(req,res){
    res.sendFile(path.join(_dirname+'/public/aboutme.html'));
});

app.get('/contactme',function(req,res){
    res.sendFile(path.join(_dirname+'/public/contactme.html'));
});

app.listen(process.env.PORT || 3000);
console.log('working on 3000');