import UploadBox from "@/components/UploadBox";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 p-4 px-8">
      <UploadBox />
      <h3>LAYOUT LENS</h3>
    </div>
  );
}
