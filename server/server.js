import express from "express";
import cors from "cors";
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import User from '../server/users.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

// const uri = 'mongodb://127.0.0.1:27017/userDirectory';
const uri = 'mongodb+srv://prabhat:demopassword123@cluster0.wzgvs.mongodb.net/userdirectory?retryWrites=true&w=majority';  

mongoose.connect(uri, options);
const db = mongoose.connection;


MongoClient.connect(uri, function (err, db) {
    if (err) {
        console.log('Error' + err);
    } else {
        console.log('DB Connected');
    }
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    // const {program, class, division, course, datefrom, datetill} = req.body;

    User.collection.findOne({
        username: username
    }, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "Login successfull", user: user})
            } else {
                res.send({message: "You have entered an invalid username or password"})
            }
        } else {
            res.send({message: "No such User found"})
        }
    });

    console.log(username, password);
});

app.listen(5000, () => {
    console.log('Server Running at PORT:5000')
});