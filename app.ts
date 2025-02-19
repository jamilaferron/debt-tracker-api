import express, { Request, Response } from "express";
import { PORT } from "./config/env";

import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import debtRouter from "./routes/debt.routes";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/debts", debtRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Debt Tracker API!");
});

app.listen(PORT, () => {
  console.log(`Debt Tracker API is running on http://localhost:${PORT}`);
});

export default app;
