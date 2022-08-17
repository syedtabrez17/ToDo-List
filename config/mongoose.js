// Importing Mongoose 
// Require the Library
const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/todo_list_db');

// Acquire the connection (to check if it is successful)
const db = mongoose.connection;

// Error
db.on('error',console.error.bind(console,'Error connecting to database'));

// Up and running the function then print the function
db.once('open',function(){
    console.log('Successfully connected to the database');
})
















// ----------------------------------------------------------------------------------------------
// main().catch(function(err){
//     if(err){
//         console.log('Error while connecting to database',err);
//         return;
//     }
//     console.log('The server in connected to database successfully');
// });

// async function main(){
//     await mongoose.connect('mongoose://localhost:27017/todo_list_db');
// }
