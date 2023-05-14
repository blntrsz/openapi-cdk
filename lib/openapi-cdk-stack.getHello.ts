import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { components, operations } from "../specs/hello-world";

type Response =
  operations["getHello"]["responses"]["200"]["content"]["application/json"];

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  console.log("event 👉", event);

  return {
    body: JSON.stringify({
      greeting: "Hello Traveler!",
    } satisfies Response),
    statusCode: 200,
  };
}
