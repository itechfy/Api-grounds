var express = require('express');
const { Grounds } = require('./data/data.ground');
var app = express();
const PORT = process.env.PORT || 5050
app.get('/', (req, res) => {
res.send('This is my demo project')
})
app.get('/grounds',(req,res)=>{
    return res.status(201).json(Grounds);
})
app.listen(PORT, function () {
console.log(`Demo project at: ${PORT}!`); });