import { Router } from "douh";

export const router = new Router();

router.get("/ping", async (ctx, next) => {
  return "pong";
});
