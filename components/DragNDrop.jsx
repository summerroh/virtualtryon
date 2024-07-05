"use client";

import axios, { AxiosProgressEvent, CancelTokenSource } from "axios";
import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { getUserToken } from "./functions/checkIsLoggedIn";

const endpoint =
  "https://devclusterzkhme5io-api-service.functions.fnc.nl-ams.scw.cloud";

export default function ImageUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const removeFile = () => {
    setUploadedFile(null);
  };

  // Image uokiad
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 1) {
      return;
    }

    const file = acceptedFiles[0];

    try {
      const response = await fetch(`${endpoint}/api/v1/images`, {
        method: "POST",
        headers: {
          token: getUserToken(),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
        return;
      }

      const data = await response.json();
      console.log("Image record created:", data);

      const imageId = data.data._id;
      const fileFormData = new FormData();
      fileFormData.append("file_conversation", file);

      if (!imageId) {
        throw new Error("Image ID does not exist");
      }

      const fileResponse = await fetch(
        `${endpoint}/api/v1/images/${imageId}/file`,
        {
          method: "POST",
          headers: {
            token: getUserToken(),
          },
          body: fileFormData,
        }
      );

      if (!fileResponse.ok) {
        throw new Error("Failed to upload image file");
      }

      const fileData = await fileResponse.json();
      console.log("Image file uploaded successfully:", fileData);
      setUploadedFile(file);
    } catch (error) {
      console.error("Error uploading image:", error);
      setErrorMessage(
        "Failed to upload image. Please make sure you upload an image file."
      );
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label
          {...getRootProps()}
          className="relative flex flex-col items-center justify-center w-full p-6 rounded-lg cursor-pointer bg-white"
        >
          <div className="relative flex flex-col items-center justify-center w-full py-6 border-1 border-gray-300 border-dashed rounded-lg cursor-pointer bg-button-background hover:bg-gray-100">
            <div className=" text-center">
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-bold text-primary">Drag & Drop</span>
              </p>
              <p className="text-xs text-gray-500 py-3 font-bold">Or</p>
              <Button className="w-full h-10 rounded-full">
                Upload an image
              </Button>
            </div>
          </div>
        </label>

        <Input
          {...getInputProps()}
          id="dropzone-file"
          accept="image/png, image/jpeg"
          type="file"
          className="hidden"
        />
      </div>

      {errorMessage && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}

      {uploadedFile && (
        <div className="mt-2">
          <p className="font-medium my-2 mt-6 text-muted-foreground text-sm">
            Uploaded File
          </p>
          <div className="space-y-2 pr-3">
            <div
              key={uploadedFile.lastModified}
              className="flex justify-between gap-2 rounded-lg overflow-hidden group hover:pr-0 pr-2 hover:border-slate-300 transition-all bg-white"
            >
              <div className="flex items-center flex-1 p-2">
                <div className="w-full ml-2 space-y-1">
                  <div className="text-sm flex justify-between">
                    <p className="text-muted-foreground ">
                      {uploadedFile.name}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFile()}
                className="bg-red-500 text-white transition-all items-center justify-center px-2 hidden group-hover:flex"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
