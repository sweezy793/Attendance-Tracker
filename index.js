const mongoose=require('mongoose');
const Student=require('./models/student');
//to get rid of warning
mongoose.Promise=global.Promise;

//connects to db
const db=mongoose.connect('mongodb://localhost:27017/attendancecli',{ useNewUrlParser: true } );





//add student
const addStudent=(student)=>{
    Student.create(student).then(student=>{
        console.info('Student data added');
        //db.close();
    });
}

//find student by name
const findStudent=(name)=>{

    const search=new RegExp(name,'i');
    Student.find({$or:[{firstname:search},{lastname:search}]})
    .then(student=>{
        console.info(student);
        console.info(`${student.length} matches`);
        //db.close();
    });
}



module.exports={
    addStudent,
    findStudent
}


 