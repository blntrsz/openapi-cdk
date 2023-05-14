import OpenAPIBackend, { Request } from "openapi-backend";
import { handler as postHelloHandler } from "./lib/openapi-cdk-stack.postHello";
import { handler as getHelloHandler } from "./lib/openapi-cdk-stack.getHello";
import { Response } from "express";

// create api with your definition file or object
const api = new OpenAPIBackend({ definition: "./specs/hello-world.yaml" });

const serverHandler: any =
  (h: Function) => async (c: any, req: any, res: any) => {
    const handlerResponse = await h({
      body: JSON.stringify(req.body),
    } as any);
    // @ts-ignore
    return res.status(handlerResponse.statusCode).json(handlerResponse.body);
  };

// register your framework specific request handlers here
api.register({
  getHello: serverHandler(getHelloHandler),
  postHello: serverHandler(postHelloHandler),
});

// initialize the backend
api.init();

const express = require("express");

const app = express();
app.use(express.json());
app.use((req: Request, res: Response) => api.handleRequest(req, req, res));
app.listen(9000, () => {
  console.log("app is listening on 9000");
});
