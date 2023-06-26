const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const db = require('./config/db')
const bodyParser = require('body-parser');
// const { MongoClient, ServerApiVersion } = require('mongodb');



db.connect()

// app.use(cors())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
})
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
routes(app)

app.listen('https://vccp-be.vercel.app', () => {

})

// app.listen(4000, () => {

// })


// var http = require('http');
// var express = require('express');
// var app = express();

// // your express configuration here

// var httpServer = http.createServer(app);

// httpServer.listen('vccp-be.vercel.app');