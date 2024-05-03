import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume2,
  Maximize2,
} from "lucide-react";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-950 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          width={56}
          height={56}
          src="/The-Dark-side-of-the-moon.jpg"
          alt="Capa do album the dark side of the moon da banda Pink Floyd"
        ></Image>
        <div className="flex flex-col">
          <a href="#" className="font-normal hover:underline">
            Time
          </a>
          <a href="#" className="hover:underline">
            Pink Floyd
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={24} className="text-zinc-200" />
          </button>
          <button>
            <SkipBack className="text-zinc-200" />
          </button>
          <button className=" w-10 h-10 flex items-center justify-center pl-1 p-1 rounded-full bg-white text-black">
            <Play />
          </button>
          <button>
            <SkipForward size={24} className="text-zinc-200" />
          </button>
          <button>
            <Repeat size={24} className="text-zinc-200" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 ">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-500">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600 ">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
