import mongoose from "mongoose";

export async function connectDB() {
  mongoose.set("bufferCommands", false);
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.warn("MONGODB_URI missing: running without database connection.");
    return;
  }
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
  }
}
