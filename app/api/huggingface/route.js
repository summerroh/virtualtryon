// app/api/huggingface/route.js
import { HfInference } from "@huggingface/inference";
import fetch from "node-fetch";

const HF_TOKEN = process.env.HF_TOKEN;

const inference = new HfInference(HF_TOKEN);
const model = "nlpconnect/vit-gpt2-image-captioning";

export async function POST(req) {
  const { imageUrl } = await req.json();

  if (!imageUrl) {
    return new Response(JSON.stringify({ error: "Image URL is required" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const imageBlob = new Blob([new Uint8Array(arrayBuffer)], {
      type: "image/jpeg",
    });

    const result = await inference.imageToText({
      data: imageBlob,
      model: model,
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
