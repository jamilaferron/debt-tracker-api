import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Debt Tracker API!");
});

app.listen(3000, () => {
  console.log("Debt Tracker API is running on http://localhost:3000");
});

export default app;
