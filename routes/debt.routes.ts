import { Router, Request, Response } from "express";

const debtRouter = Router();

debtRouter.get("/", (req: Request, res: Response) => {
  res.send({ title: "GET all debts" });
});

debtRouter.get("/:id", (req: Request, res: Response) => {
  res.send({ title: "GET debt details" });
});

debtRouter.post("/", (req: Request, res: Response) => {
  res.send({ title: "CREATE new debt" });
});

debtRouter.put("/:id", (req: Request, res: Response) => {
  res.send({ title: "UPDATE debt" });
});

debtRouter.delete("/:id", (req: Request, res: Response) => {
  res.send({ title: "DELETE debt" });
});

debtRouter.get("/user/:id", (req: Request, res: Response) => {
  res.send({ title: "GET user debts" });
});

debtRouter.put("/:id/archive", (req: Request, res: Response) => {
  res.send({ title: "ARCHIVE debt" });
});

debtRouter.get("/upcoming-payments", (req: Request, res: Response) => {
  res.send({ title: "GET upcoming payments" });
});

export default debtRouter;
