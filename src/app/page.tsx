import AlbumItem from "@/components/AlbumItem";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Album } from "@/types/album";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import Image from "next/image";

const album: Album[] = [
  {
    Title: "The Dark Side of the Moon",
    Artist: "Pink Floyd",
    UrlCape: "/The-Dark-side-of-the-moon.jpg",
    AltCape: "Capa do album the dark side of the moon da banda Pink Floyd",
  },
  {
    Title: "The Wall",
    Artist: "Pink Floyd",
    UrlCape: "/The-wall.jpg",
    AltCape: "Capa do album the wall da banda Pink Floyd",
  },
  {
    Title: "Animals",
    Artist: "Pink Floyd",
    UrlCape: "/animals.jpg",
    AltCape: "Capa do album animals da banda Pink Floyd",
  },
  {
    Title: "Wish You Were Here",
    Artist: "Pink Floyd",
    UrlCape: "/whish-you-where-here.jpg",
    AltCape: "Capa do album Wish You Were Here da banda Pink Floyd",
  },
  {
    Title: "An evening with silk sonic",
    Artist: "Bruno Mars & Anderson Paak",
    UrlCape: "/an-evening-with silk-sonic.jpg",
    AltCape: "Capa do album an evening with silk sonic do Brunos Mars e Anderson Paak",
  },
  {
    Title: "Doo wops & hooligans",
    Artist: "Bruno Mars",
    UrlCape: "/doo-wops-and-hooligans.jpg",
    AltCape: "Capa do album Doo wops and hooligans do Brunos Mars e Anderson Paak",
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10"> Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {album.map((album) => (
              <AlbumItem
                key={album.Title} 
                title={album.Title}
                src={album.UrlCape}
                alt={album.AltCape}
              />
            ))}
          </div>
          
          <h2 className="font-semibold text-2xl mt-10">
            {" "}
            Made for Gabriel Villarinho
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={104}
                height={104}
                src="/The-Dark-side-of-the-moon.jpg"
                className="w-full"
                alt="Capa do album the dark side of the moon da banda Pink Floyd"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={104}
                height={104}
                src="/The-Dark-side-of-the-moon.jpg"
                className="w-full"
                alt="Capa do album the dark side of the moon da banda Pink Floyd"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={104}
                height={104}
                src="/The-Dark-side-of-the-moon.jpg"
                className="w-full"
                alt="Capa do album the dark side of the moon da banda Pink Floyd"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={104}
                height={104}
                src="/The-Dark-side-of-the-moon.jpg"
                className="w-full"
                alt="Capa do album the dark side of the moon da banda Pink Floyd"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={104}
                height={104}
                src="/The-Dark-side-of-the-moon.jpg"
                className="w-full"
                alt="Capa do album the dark side of the moon da banda Pink Floyd"
              ></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
