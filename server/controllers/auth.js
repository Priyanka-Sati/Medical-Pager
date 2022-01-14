const {connect} = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_API_ID;


// req => contain the info what we send from frontend
const signup = async(req, res) => {
    try{
        const{ fullName, username, password, phoneNumber} = req.body;
        
        // crypto is used to create unique Id here we have created the hexadecimal id
        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, api_id)// we shouldt't share these api's to others thats why we use environment variable ; // connection to stream

        const hashedPassword = await bcrypt.hash(password, 10);  // convert password to hashed password

        const token = serverClient.createUserToken(userId);

        res.status(200).json({token, fullName, username, userId, hashedPassword, phoneNumber}); // return data to frontend

    }
    catch ( error){
        console.log(error);
        res.status(500).json({message: error});
    }
};


const login = async(req, res) => {
    try{

        const 

    }
    catch ( error){
        console.log(error);
        res.status(500).json({message: error});
    }
};

module.exports = {login, signup}