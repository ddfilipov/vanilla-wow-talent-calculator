import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        res.set("Cache-Control", "no-store");
        next();
    });
}

app.get("/", (req: Request, res: Response) => {
    res.send({ data: "returnedData" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
