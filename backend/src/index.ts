import dotenv from "dotenv";
import app from "./app.js";

// using dotenv module to access environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});