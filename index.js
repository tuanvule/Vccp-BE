const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const db = require('./config/db')
// const { MongoClient, ServerApiVersion } = require('mongodb');



db.connect()

app.use(cors())
app.use(express.json())
routes(app)

app.listen(4000, () => {
    
})