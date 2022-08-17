// Importing Express
const express = require('express');
// Importing path
const path = require('path');
// Port used
const port = 8000;
// Importing body parser
const bodyParser = require('body-parser');
// Importing Database
const db = require('./config/mongoose');
const Todo = require('./models/todos');

// Initiating Express
const app = express();


// Setting up view engine as ejs
app.set('view engine','ejs');
// Setting Path for views
app.set('views',path.join(__dirname,'views'));

// Middleware for body parser
app.use(bodyParser.urlencoded({extended:false}));
// For static files for eg. css, js, images etc.
app.use(express.static('assets'));

//Controller
app.get('/',function(req,res){
   
    Todo.find({},function(err,todos){
        if(err){
            console.log('Error in fetching Todo from db');
            return;
        }
        return res.render('home',{
            title: 'ToDo List',
            todo_list: todos
        });
    });
});

// Handling form post request
app.post('/todo-items',function(req,res){
    // console.log(req.body.task);
    // console.log(req.body);
    Todo.create({
        task: req.body.task
    },function(err,newTodos){
        if(err){
            console.log('Error in creating a contact');
            return;
        }
        return res.redirect('back');
    });
});

// Deleting Tasks
app.get('/delete-task', function(req,res){
    let id = req.query.id;

    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting task from database');
            return;
        }
        return res.redirect('back');
    });
});

// Server listener
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        return;
    }
    console.log('The server is up and running on port: ',port);
});