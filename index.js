const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const db = require('./config/db')
// const { MongoClient, ServerApiVersion } = require('mongodb');



db.connect()

// app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://vccp-be.vercel.app/");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
routes(app)

app.listen('https://vccp-be.vercel.app', () => {

})



// var http = require('http');
// var express = require('express');
// var app = express();

// // your express configuration here

// var httpServer = http.createServer(app);

// httpServer.listen('vccp-be.vercel.app');