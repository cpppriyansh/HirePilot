import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error('Please add MONGODB_URI to .env.local');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    console.log("📦 Using cached MongoDB connection");
    return { client: cachedClient, db: cachedDb };
  }

  console.log("🔌 Connecting to MongoDB...");
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(); // Uses "Hirepilot" from connection string

  cachedClient = client;
  cachedDb = db;

  console.log("✅ MongoDB connected successfully");
  return { client, db };
}

// DON'T export cachedDb directly - export a getter function
export async function getDatabase(): Promise<Db> {
  const { db } = await connectToDatabase();
  return db;
}

export async function getClient(): Promise<MongoClient> {
  const { client } = await connectToDatabase();
  return client;
}
