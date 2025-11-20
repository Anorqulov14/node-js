import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB ulandi");
    } catch (err) {
        console.log("Mongo ulanish xatosi:", err.message);
        process.exit(1);
    }
}
