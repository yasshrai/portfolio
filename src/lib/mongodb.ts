import mongoose from 'mongoose'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } | undefined
}

let cached = global._mongoose
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached!.conn) return cached!.conn

  if (!cached!.promise) {
    // Create a single shared connection promise so parallel requests wait for the same connection
    cached!.promise = mongoose.connect(uri, {
      bufferCommands: false,
    })
  }

  try {
    cached!.conn = await cached!.promise
  } catch (err) {
    // If connection failed, reset the promise so future calls can retry
    cached!.promise = null
    throw err
  }

  return cached!.conn
}

export default dbConnect
