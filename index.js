const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const db = require('./config/db')
// const { MongoClient, ServerApiVersion } = require('mongodb');



db.connect()

app.use(cors({
    origin: "http://localhost:3000/", // Vervang door de juiste oorsprong
    methods: "GET, POST, PUT, DELETE", // Vervang door de toegestane methoden
    allowedHeaders: "Content-Type", // Vervang door de toegestane headers
    credentials: true, // Schakel cookies en verificatie in indien nodig
    optionsSuccessStatus: 200
}))
app.use(express.json())
// app.use((req, res) => {
//     res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Options");
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
// })
routes(app)

app.listen('https://vccp-be.vercel.app', () => {

})



// var http = require('http');
// var express = require('express');
// var app = express();

// // your express configuration here

// var httpServer = http.createServer(app);

// httpServer.listen('vccp-be.vercel.app');