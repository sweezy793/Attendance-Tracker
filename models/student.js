const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    subject:{type:String},
    present:{type:Boolean}
});

module.exports=mongoose.model('Student',studentSchema);