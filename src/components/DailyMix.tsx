import Image from "next/image";

interface DailyMixProps {
  title: string;
  src: string;
  alt: string;
  count: number;
}

const DailyMix = ({ title, src, alt, count }: DailyMixProps) => {
  return (
    <a
      href="#"
      className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        width={104}
        height={104}
        src={src}
        className="w-full"
        alt={alt}
      ></Image>
      <strong className="font-semibold">Daily Mix {count}</strong>
      <span className="text-sm text-zinc-500">{title}</span>
    </a>
  );
};

export default DailyMix;
