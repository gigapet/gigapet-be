require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json())
server.use(cors());

server.get('/hello', (req,res) => {
    console.log("hello")
})