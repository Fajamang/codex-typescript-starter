import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ Geen API key gevonden in .env");
  process.exit(1);
}

const openai = new OpenAI({ apiKey });

async function run() {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Je bent een behulpzame assistent." },
      { role: "user", content: "Leg kort het verschil uit tussen AC en DC stroom." }
    ]
  });

  console.log("✅ Antwoord:", response.choices[0].message.content);
}

run();
