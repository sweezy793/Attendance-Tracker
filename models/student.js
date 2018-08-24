const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    rollno:{type:Number},
    subject:{type:String},
    present:{type:Boolean}
});

module.exports=mongoose.model('Student',studentSchema);