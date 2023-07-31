import App, { bodyParser } from "douh";
import { router } from "./routes";

const app = new App();

(async () => {
  app.use(bodyParser);
  app.use(async (_, __, next) => {
    console.log("middleware");
    await next();
  });

  app.use(router.middleware());

  app.listen(3000);
})();
