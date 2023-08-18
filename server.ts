import App, { Router, serveStatic } from "douh";

const app = new App();
const router = new Router();

app.use(serveStatic("/public"));
app.use((req, res, next) => {
  console.log("!!!");
  next();
});

router.get("/ping", (req, res, next) => {
  return "pong";
});

router.post("/ping", (req, res, next) => {
  return "pong";
});

app.use(router.middleware());

app.listen(1111);
