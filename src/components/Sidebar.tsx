import { Playlist } from "@/types/playlist";
import { Library, ChevronRight, Plus, Search, List } from "lucide-react";

interface SidebarProps {
  playlists: Playlist[];
}

import Image from "next/image";

export function Sidebar({ playlists }: SidebarProps) {
  return (
    <aside className="w-72 bg-zinc-950 p-6 rounded-lg">
      <nav className="flex items-center text-zinc-400">
        <button className="flex items-center gap-2 hover:text-zinc-300">
          <Library />
          <strong className="font-semibold">Sua Biblioteca</strong>
        </button>
        <button className="ml-auto rounded-full hover:bg-white/5">
          <Plus />
        </button>
        <button className="ml-4 rounded-full hover:bg-white/5">
          <ChevronRight />
        </button>
      </nav>

      <nav className="flex items-center gap-3 mt-6">
        <div className="w-24 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
          <a href="">Playlists</a>
        </div>
        <div className="w-24 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
          <a href="">Albúns</a>
        </div>
        <div className="w-28 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
          <a href="">Podcasts</a>
        </div>
      </nav>

      <nav className="flex items-center mt-4 text-zinc-400">
        <button className="rounded-full hover:bg-white/10">
          <Search size={20} />
        </button>

        <button className="flex items-center gap-2 ml-auto hover:text-zinc-300">
          <strong className="font-semibold">Recentes</strong>
          <List size={20} />
        </button>
      </nav>
      <nav className=" flex flex-col mt-5">
        {playlists.map((playlist) => (
          <div className="flex items-center gap-3 mb-2">
            <Image
              width={56}
              height={56}
              src={playlist.UrlImage}
              alt={playlist.AltImage}
            ></Image>
            <div className="flex flex-col">
              <a href="#" className="font-bold hover:underline">
                {playlist.Name}
              </a>
              <a href="#" className="hover:underline text-sm text-zinc-400">
                Playlist • {playlist.MadeFor}
              </a>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
