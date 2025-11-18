import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is required');
}

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
});

// Connect with error handling
client.connect()
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    // Ping to verify connection
    return client.db("admin").command({ ping: 1 });
  })
  .then(() => console.log("✅ MongoDB ping successful"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    console.error("Check: 1) Network access in MongoDB Atlas 2) Connection string 3) Firewall settings");
  });

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
    updateAge: 60 * 60 * 24,
  },
});
