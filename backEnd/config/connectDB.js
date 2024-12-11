import mongoose from "mongoose";

const connectDB = () => {
    const uri = "mongodb://localhost:27017/user_management"
    return mongoose.connect(uri)
    .then(() => {
        console.log("database connected successfully")
    })
    .catch((error) => {
        console.error("connection failed", error)
    })
}

export default connectDB;