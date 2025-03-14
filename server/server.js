const express = require('express');
const app = express();
const port =4000;
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
mongoose.connect('mongodb+srv://isdaouen000:PEmGcBl8hFoNeQcN@adam.8xj3n.mongodb.net/mern?retryWrites=true&w=majority&appName=adam'
   
).then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    });})
    .catch((err)=>{
    console.log('Error connecting to the database');
});





app.get('/users',(req,res)=>{

    UserModel.find()
    .then((users)=>{
        res.json(users);

    })
    .catch((err)=>{console.log(err)});
});


app.post('/users',(req,res)=>{
    const user = new UserModel({
        name: 'amine',
        email: 'amine@gmail.com',
        password: '1222222223456'
    });
    user.save()
    .then((user)=>{res.json(user)})
    .catch((err)=>{console.log(err)});
});

// malwares
