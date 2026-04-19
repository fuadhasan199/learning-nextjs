import { MongoClient, ServerApiVersion } from 'mongodb'  // ✅ import use করো

const uri = process.env.DB_uri
const dbname = process.env.Db_name

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

let isConnected = false  // বারবার connect এড়াতে

export const dbConnect = async (cname) => {
  if (!isConnected) {
    await client.connect()
    isConnected = true
    console.log("MongoDB Connected ✅")
  }
  return client.db(dbname).collection(cname)
}