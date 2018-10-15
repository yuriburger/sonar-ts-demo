import * as express from "express";

class App {
  public express: any;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get("/", (req: any, res: any) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use("/", router);
  }
}

export default new App().express;
