import mongoose from 'mongoose';

// connection
async function connectMongoDb(url){
    return mongoose.connect(url);
}

// module.exports = { connectMongoDb }
export default connectMongoDb