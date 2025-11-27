import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { input } = await req.json();

  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "你是 BellaMaths AI 助手，一个专业的数学导师。" },
        { role: "user", content: input },
      ],
    }),
  });

  const data = await openaiRes.json();

  // 如果 OpenAI 那边还是报错，就把错误信息友好地显示出来
  if (!openaiRes.ok) {
    console.error("OpenAI error:", data);
    const msg = data?.error?.message ?? "调用 OpenAI 失败";
    return NextResponse.json({
      reply: `（后端调用 OpenAI 失败：${msg}）`,
    });
  }

  // 正常情况：拿出 AI 回复的文字
  const reply =
    data?.choices?.[0]?.message?.content ?? "AI 出错了，请稍后再试一次。";

  return NextResponse.json({ reply });
}
