import React, { useState } from "react";

const CaptionButton = () => {
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const imageUrl =
    "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg";

  const handleGenerateCaption = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/huggingface", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setCaption(data.text);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateCaption} disabled={loading}>
        {loading ? "Generating..." : "Generate Caption"}
      </button>
      {caption && <p>{caption}</p>}
    </div>
  );
};

export default CaptionButton;
