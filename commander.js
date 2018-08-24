const program=require('commander');
const {
    addStudent,
    findStudent,
    findPresent
}=require('./index');

program
.version('1.0.0')
.description('Student Management System')

program
.command('add <firstname> <lastname> <subject> <present>')
.alias('a')
.description('Add a student')
.action((firstname,lastname,subject,present)=>{
    addStudent({firstname,lastname,subject,present});    
});

program
.command('find <name>')
.alias('f')
.description('Find a student')
.action(name=>{
    findStudent(name)
});

program
.command('find <present>')
.alias('fp')
.description('Find present students')
.action(present=>{
    findPresent(present)
});


program.parse(process.argv);