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
};

//find student by name
const findStudent=(name)=>{

    const search=new RegExp(name,'i');
    Student.find({$or:[{firstname:search},{lastname:search}]})
    .then(student=>{
        console.info(student);
        console.info(`${student.length} matches`);
        //db.close();
    });
};

//find student by present status
const findPresent=(present)=>{
    Student.find({present:true})
    .then(students=>{
        console.info(students);
        console.info(`${students.length} students present`);
    });
};


//update student details
const updateStudent=(_id,student)=>{
    Student.update({_id},student)
    .then(student=>{
        console.info('Student Updated');
        
    });
};

//remove student
const removeStudent=(_id)=>{
    Student.remove({_id})
    .then(student=>{
        console.info('Student removed');
    });
}

//list all students
const allStudents=()=>{
    Student.find()
    .then(students=>{
        console.info(students);
        console.info(`${students.length} students`);
    });
}




module.exports={
    addStudent,
    findStudent,
    findPresent,
    updateStudent,
    removeStudent,
    allStudents
}


 