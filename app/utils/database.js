import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivas2710cool00_db_user:RnpVAk0nkDN5Dl8f@cluster0.hrjwknd.mongodb.net/",
      {
        dbName: "NextJS_Authen_App",
      }
    );
    console.log("MongoDB connected successfully..!");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;

// // // // MongoDB connected successfully..!
