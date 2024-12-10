import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariable) {
    throw "Missing MY_IMPORTANT_VARIABLE";
  }

  console.log("Hola Mundo desde los logs");

  return {
    body: JSON.stringify({ myImportantVariable }),
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
