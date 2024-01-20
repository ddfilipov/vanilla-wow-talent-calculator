import express, { Request, Response } from "express";
import { classData } from "./data/classData";

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        res.set("Cache-Control", "no-store");
        next();
    });
}

app.get("/class-data", (req: Request, res: Response) => {
    const className = req.query.className;
    const fetchedClass = classData.find((classinfo) => classinfo.className === className);
    res.send({ data: fetchedClass });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
