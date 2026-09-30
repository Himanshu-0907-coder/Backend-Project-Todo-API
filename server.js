import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import todoRoutes from "./routes/TodoRoutes.js";

dotenv.config();

const app = express();

// Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});