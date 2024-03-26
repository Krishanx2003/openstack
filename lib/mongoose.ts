import mongoose from 'mongoose';

// Define a variable to keep track of the connection status
let isConnected: boolean = false;

// Function to check if already connected to the database
export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB_URL');
    }
    if (isConnected) {
        return console.log('Mongodb is connected');
    }
    try {
        // Connect to MongoDB using the provided URL
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "openmind"
        });
        // Set isConnected to true once connected
        isConnected = true;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
