//npm install bcrypt crypto dotenv express getstream stream-chat nodemon twilio cors
const express = require('express');
const cors = require('cors');  // cross origin request

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // allow us to call environment variable inside out node application

// middleware
app.use(cors());
app.use(express.json());  // allow us to send json payload from frontend to backend 
app.use(express.urlencoded()); // built in middleware in express

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('./auth', authRoutes); // added to host server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));