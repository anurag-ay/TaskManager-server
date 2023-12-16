import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// importing routes
import userRoutes from "./routes/userRoute.js";

// Calling inbuilt middleware
app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Setting up database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to the MongoDB..."))
  .catch((err) => console.log(err));

// redirecting to the routes
app.use("/api/v1/user", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.status.send("This is todo home");
});

// catching unhandled exception
process.on("uncaughtException", (ex) => {
  console.log("We got an Exception");
  console.log(ex);
  process.exit(1);
});

// catching unhandled Rejection
process.on("unhandledRejection", (ex) => {
  console.log("We got a Rejection");
  console.log(ex);
  process.exit(1);
});

// Initialize dynamic port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}.....`));
