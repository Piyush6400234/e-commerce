// mongopassword=Wa0jJY7vaesHspGp
// user=piyush6400234
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
