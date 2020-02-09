let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let dotenv = require('dotenv');
let informs = require('./routes/informs');
const cors = require("cors");

app.use(cors());

//CORS Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',informs);

let port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send("P's api");
})

var server = app.listen(port,function(port){
    console.log('Node server running at '+ server.address().port)
});
