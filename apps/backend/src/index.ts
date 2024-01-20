import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    console.log("aksjfhkjasdhfkjshdfkj");
    res.send({ data: "cosaqweqwe" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
