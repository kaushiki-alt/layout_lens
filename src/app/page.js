'use client'
import AnalysisPanel from "@/components/AnalysisPanel";
import UploadBox from "@/components/UploadBox";
import { useState } from "react";

export default function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null)

  return (
    <main className="grid lg:grid-cols-2 gap-4 p-4 lg:px-8 h-[calc(100vh-2rem)]">
      <div className="lg:overflow-y-auto lg:rounded-3xl">
        <UploadBox uploadImage={uploadImage} setUploadImage={setUploadImage} previewURL={previewURL} setPreviewURL={setPreviewURL} />
      </div>

      <div className="lg:overflow-y-auto lg:rounded-3xl">
        <AnalysisPanel uploadImage={uploadImage} />
      </div>
    </main>
  );
}