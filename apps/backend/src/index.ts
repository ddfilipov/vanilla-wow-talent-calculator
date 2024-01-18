import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
