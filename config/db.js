const mongoose = require('mongoose')

async function connect() {
    const uri = "mongodb+srv://TLV:ngovipmo112@cluster0.fvrzg6p.mongodb.net/?retryWrites=true&w=majority";

    try {
        await mongoose.connect(uri);
        console.log('db ready')

        // const client = new MongoClient(uri, {
        //     serverApi: {
        //       version: ServerApiVersion.v1,
        //       strict: true,
        //       deprecationErrors: true,
        //     }
        // });
        
        // async function run() {
        //     try {
        //       // Connect the client to the server	(optional starting in v4.7)
        //       await client.connect();
        //       // Send a ping to confirm a successful connection
        //       await client.db("admin").command({ ping: 1 });
        //       console.log("Pinged your deployment. You successfully connected to MongoDB!");
        //     } finally {
        //       // Ensures that the client will close when you finish/error
        //       await client.close();
        //     }
        //   }
        // run().catch(console.dir);  
    } catch (error) {
        console.log(error)
    }

    

}

module.exports = { connect }