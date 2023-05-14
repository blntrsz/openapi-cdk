import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { operations } from "../specs/hello-world";

type Body =
  operations["postHello"]["requestBody"]["content"]["application/json"];
type Response =
  operations["postHello"]["responses"]["200"]["content"]["application/json"];

export async function handler(
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> {
  console.log("event 👉", event);
  const body = JSON.parse(event.body ?? "") as Body;

  return {
    body: JSON.stringify({
      greeting: `Hello ${body.name}`,
    } satisfies Response),
    statusCode: 200,
  };
}
