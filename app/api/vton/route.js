import { Client } from "@gradio/client";
import fetch from "node-fetch";

export async function POST(req) {
  const HF_TOKEN = process.env.HF_TOKEN;

  try {
    const { imageUrl, clothingUrl } = await req.json();

    if (!imageUrl || !clothingUrl) {
      console.error("Image URL and Clothing URL are required");
      return new Response(
        JSON.stringify({ error: "Image URL and Clothing URL are required" }),
        { status: 400 }
      );
    }

    console.log("Fetching person image from URL:", imageUrl);
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(
        `Failed to fetch person image: ${imageResponse.statusText}`
      );
    }
    const personImageBlob = await imageResponse.blob();

    console.log("Fetching clothing image from URL:", clothingUrl);
    const clothingResponse = await fetch(clothingUrl);
    if (!clothingResponse.ok) {
      throw new Error(
        `Failed to fetch clothing image: ${clothingResponse.statusText}`
      );
    }
    const clothingImageBlob = await clothingResponse.blob();

    console.log("Initializing Gradio client");
    // const app = new Client("yisol/IDM-VTON");
    const app = await Client.connect("yisol/IDM-VTON", { hf_token: HF_TOKEN });

    console.log("Making prediction");
    const result = await app.predict("/tryon", [
      {
        background: personImageBlob,
        layers: [],
        composite: null,
      }, // undefined  in 'Human. Mask with pen or use auto-masking' Imageeditor component
      clothingImageBlob, // blob in 'Garment' Image component
      "Hello!!", // string  in 'parameter_17' Textbox component
      true, // boolean  in 'Yes' Checkbox component
      true, // boolean  in 'Yes' Checkbox component
      3, // number  in 'Denoising Steps' Number component
      3, // number  in 'Seed' Number component
    ]);

    console.log("Prediction result:", result.data);
    return new Response(JSON.stringify(result.data), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
