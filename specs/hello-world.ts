/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/hello": {
    /** @description Receive a general greeting */
    get: operations["getHello"];
    /** @description Receive a name in request body and respond with a greeting message for the name informed */
    post: operations["postHello"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** HelloRequest */
    HelloRequest: {
      name: string;
    };
    /** HelloResponse */
    HelloResponse: {
      greeting: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /** @description Receive a general greeting */
  getHello: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["HelloResponse"];
        };
      };
    };
  };
  /** @description Receive a name in request body and respond with a greeting message for the name informed */
  postHello: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["HelloRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["HelloResponse"];
        };
      };
    };
  };
}
