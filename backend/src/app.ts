import express from "express";
import cors from "cors";


import router from "./routes/index.js";

const app = express();


// using cors to allow cross-origin requests
app.use(cors());

// using express.json to parse JSON request bodies
app.use(express.json());

// route to check server status
app.use("/api/status", (req , res) => {
    res.json({ status: "ok" });
})


app.use("/api", router);

export default app;