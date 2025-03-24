import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import storyRoutes from './routes/stories.js';
import userRoutes from './routes/users.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use('/stories', storyRoutes);
app.use('/user',userRoutes);



const PORT = process.env.PORT || 5001;
const MONGOURL=process.env.MONGOURL;
console.log("hello");

const connectdb = async () => {
    try {
        await mongoose.connect(MONGOURL);
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (err) {
        console.log("Connection to MongoDB failed", err.message);
    }
};

connectdb();

mongoose.connection.on("open", () => console.log("Connected to database successfully"));
mongoose.connection.on("error", (err) => console.log(err)); 
