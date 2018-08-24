const program=require('commander');
const {prompt}=require('inquirer');
const {
    addStudent,
    findStudent,
    findPresent,
    updateStudent,
    removeStudent,
    allStudents
}=require('./index');


//Questions
const questions=[
    {
        type:'input',
        name:'firstname',
        message:`Student's first name`
    },
    {
        type:'input',
        name:'lastname',
        message:`Student's last name`
    },
    {
        type:'input',
        name:'rollno',
        message:`Student's Roll No.`
    },
    {
        type:'input',
        name:'subject',
        message:`Subject name`
    },
    {
        type:'input',
        name:'present',
        message:`Present?`
    }
]

program
.version('1.0.0')
.description('Student Management System')

program
.command('add')
.alias('a')
.description('Add a student')
.action(()=>{
    prompt(questions).then(answers=>addStudent(answers));
}); 

program
.command('find <name>')
.alias('f')
.description('Find a student')
.action(name=>{
    findStudent(name)
});

program
.command('findp <present>')
.alias('fp')
.description('Find present students')
.action(present=>{
    findPresent(present)
});

program
.command('update')
.alias('u')
.description('Update student')
.action(()=>{
    prompt(questions).then(answers=>updateStudent(answers));
}); 


program.parse(process.argv);