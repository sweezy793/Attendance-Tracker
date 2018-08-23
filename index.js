const mongoose=require('mongoose');

//to get rid of warning
mongoose.Promise=global.Promise;

//connects to db
const db=mongoose.connect('mongodb://localhost:27017/attendancecli',{useMongoClient:true});
