import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  console.log("Hola mundo desde hello handler");

  return {
    body: JSON.stringify({ message: "Hello World" }),
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
