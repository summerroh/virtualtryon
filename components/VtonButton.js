import React, { useState } from "react";

const VtonButton = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const imageUrl =
    "https://static.wikia.nocookie.net/gossipgirl/images/a/a7/SerenaInfobox.jpg/revision/latest?cb=20200318020521";
  const clothingUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMyTzMb-BhLKnt6Rw8_FhzD5hTcIBOIFCDQ&usqp=CAU";

  const handleGenerateVTON = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/vton", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl, clothingUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result); // Adjust according to actual API response structure
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
      <button onClick={handleGenerateVTON} disabled={loading}>
        {loading ? "Generating..." : "Try On Clothing"}
      </button>
      {result && <img src={result} alt="Virtual Try-On Result" />}
    </div>
  );
};

export default VtonButton;
