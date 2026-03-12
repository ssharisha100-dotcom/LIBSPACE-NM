import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);

// Database connection
connectDb();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Our server is working at PORT : ${PORT}`);
});