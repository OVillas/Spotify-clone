import { Play } from "lucide-react";
import Image from "next/image";

interface AlbumItemProps {
  title: string;
  src: string;
  alt: string;
}

const AlbumItem = ({ title, src, alt }: AlbumItemProps) => {
  return (
    <div className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
      <Image width={104} height={104} src={src} alt={alt} />
      <strong>{title}</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 p-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </div>
  );
};

export default AlbumItem;
