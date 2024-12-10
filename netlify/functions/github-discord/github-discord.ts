import type { Handler } from "@netlify/functions";

const notify = async (message: string) => {
  const body = {
    content: message,
  };

  const resp = await fetch(process.env.DISCORD_WEBHOOK_URL ?? "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    console.log("Error sending message to discord");
    return false;
  }

  return true;
};

export const handler: Handler = async (event, context) => {
  await notify("Hola Mundo desde Netlify Dev");
  return {
    body: JSON.stringify({ message: "done" }),
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
  };
};
