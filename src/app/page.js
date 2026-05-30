'use client'
import AnalysisPanel from "@/components/AnalysisPanel";
import UploadBox from "@/components/UploadBox";
import { useState } from "react";

export default function Home() {
  const [uploadImage, setUploadImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null)

  return (
    <main className="grid lg:grid-cols-2 gap-4 p-4 px-8 lg:items-start">
      <UploadBox uploadImage={uploadImage} setUploadImage={setUploadImage} previewURL={previewURL} setPreviewURL={setPreviewURL} />

    
     <div className="lg:sticky lg:top-4 lg:self-start">
        <AnalysisPanel uploadImage={uploadImage} />
      </div>
    </main>
  );
}