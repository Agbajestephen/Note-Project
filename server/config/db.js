const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = async() =>{
    try{
        const conn =await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DatabaseConnected${conn.connection.host}`);
    }catch (error) { 
        console.log('db not connected');
    }
}
module.exports = connectDB