const express = require('express')
const jwt = require('jsonwebtoken');
const userModel = require('../Models/userModel')

const JWT_KEY = 'NayanPeticot'

const authRouter = express.Router();

authRouter.route('/signup')
.post(signUpRouter);

authRouter.route('/login')
.post(loginUser);

authRouter.route('/logout')
.get(logOut);

async function signUpRouter(req, res) {
    let userData = req.body;
    let user = await userModel.create(userData);
    res.status(200).json({
        message: 'User Created Successfully...',
        user: user
    })
}


async function loginUser(req, res) {
    let data = req.body;
    let user = await userModel.findOne({userEmail:data.userEmail});
    
    try{
        if(user) {
            if(user.userPassword === data.userPassword) {
                let uid = user['_id'];
                var token = jwt.sign({payload: uid}, JWT_KEY);
                res.cookie('login', token, {httpOnly: true})
                res.json({
                    message: 'User Logged In...'
                })
            } else {
                res.json({
                    message: 'Wrong Credentials...'
                })
            }
        } else {
            res.json({
                message: 'Email Id not found'
            })
        }
    } catch(err) {
        res.json({
            message: 'Error Encountered'
        })
    }
}

function logOut(req, res) {
    res.cookie('isLoggedIn', false, {httpOnly: true})
    res.json({
        message: 'Logged Out Successfully....'
    })
}


module.exports = authRouter;