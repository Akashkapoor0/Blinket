import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please Provide MongoDB URI in the .env file"
    )
}
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connected")
    } catch (error) {
        console.log("MongoDB connect error",error)
        process.exit(1)
    }
}
export default connectDB