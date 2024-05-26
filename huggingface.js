// 1. import required libraries
import { HfInference } from "@huggingface/inference";

// 2. Specify yout Hugging Face acceess token
const HF_TOKEN = process.env.HF_TOKEN;

//  3. Initialize the Hugging Face Inference class
const inference = new HfInference(HF_TOKEN);

// 4. Define the model and the image input
const model = "nlpconnect/vit-gpt2-image-captioning";
const imageUrl =
  "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg";

// 5. Fetch the image as a Blob
const response = await fetch(imageUrl);
const imageBlob = await response.blob();

// 6. Use the Hugging Face Inference class to generate
const result = await inference.imageToText({
  data: imageBlob,
  model: model,
});

// 7. Log the result
console.log(result);
