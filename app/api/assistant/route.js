export async function POST(request) {
  const { messages } = await request.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "ANTHROPIC_API_KEY is not set on the server yet." },
      { status: 501 }
    );
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 500,
      system:
        "You help students of an AI video creation course write strong prompts for AI image and video tools. Use the ROLE, OBJECTIVE, CONTEXT, DETAILS, CONSTRAINTS, OUTPUT structure taught in Module 2 when it helps. Keep answers short and practical.",
      messages,
    }),
  });

  const data = await res.json();
  const text = data?.content?.find((b) => b.type === "text")?.text || "No response.";
  return Response.json({ text });
}
