import mongoose from "mongoose";

export default function databaseConfig() {
  // Setting up database
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to the MongoDB..."))
    .catch((err) => console.log(err));
}
