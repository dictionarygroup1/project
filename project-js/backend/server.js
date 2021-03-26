let express = require('express');
let cors = require('cors')
let mongoose = require('mongoose')
let database = require('./database')
let bodyParser = require('body-parser')

// Connect Db
mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected');
}), error=>{
    console.log('Cannot Connect to database' + error);
}

const memberAPI = require('./routes/member.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())

// API
app.use('/api',memberAPI);
// Create PORT
const port = process.env.PORT || 4000
const server = app.listen(port,()=>{
    console.log('Connected to port ' + port);
})

// 404 Handler
app.use((req,res,next)=>{
    next(createError(404))
})

// error Handler
app.use((err,req,res,next)=>{
    console.log(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})