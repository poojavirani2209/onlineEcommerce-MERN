const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pooja1522:Passw0rd%4012345@onlineshop.la5l9qe.mongodb.net/?appName=onlineShop";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

exports.connectToDB = async function connectToDB(callback) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    callback();
  } catch (error) {
    throw Error("Error while connecting DB " + error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
