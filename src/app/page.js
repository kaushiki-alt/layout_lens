'use client'
import AnalysisPanel from "@/components/AnalysisPanel";
import UploadBox from "@/components/UploadBox";
import { useState } from "react";

export default function Home() {
  const [uploadImage, setUploadImage] = useState('UIDesign.png');
  const [previewURL, setPreviewURL] = useState(null)
  return (
    <main className="grid lg:grid-cols-2 gap-4 p-4 px-8">
      <UploadBox uploadImage={uploadImage} setUploadImage={setUploadImage} previewURL={previewURL} setPreviewURL={setPreviewURL} />
      <AnalysisPanel uploadImage={uploadImage} />
    </main>
  );
}

// null the "uploadImage" and "analysisResult" state