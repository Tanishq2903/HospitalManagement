import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_HOSPITAL_MANAGEMENT"
    }).then(() => {
        console.log("db connected");
    }).catch(err => {
        console.log(`problem in database connection ${err}`);
    });
}