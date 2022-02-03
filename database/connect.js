// mongodb.js

import { MongoClient } from 'mongodb'

const uri ="mongodb+srv://achrizal:123@cluster0.eugtx.mongodb.net/db-latihan?retryWrites=true&w=majority"
const options = {
   useUnifiedTopology: true,
   useNewUrlParser: true,
}

let client = new MongoClient(uri, options)
let clientPromise = client.connect()
async function connectDb() {
   const db = await (await clientPromise).db("db-latihan");
   return db
}
// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options)
// }


// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default connectDb