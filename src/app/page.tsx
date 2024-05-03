import AlbumItem from "@/components/AlbumItem";
import DailyMix from "@/components/DailyMix";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import albumsMock from "@/mocks/AlbumsMock";
import { ArtistMock } from "@/mocks/ArtistsMock";
import { PlaylistMock } from "@/mocks/playlistMock";
import { Album } from "@/types/album";
import { Artist } from "@/types/artist";
import { Playlist } from "@/types/playlist";
import { ChevronLeft, ChevronRight } from "lucide-react";

const album: Album[] = albumsMock;
const dailyMix: Artist[] = ArtistMock;
const playlists: Playlist[] = PlaylistMock;

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar playlists={playlists} />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-16 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
              <a href="">Tudo</a>
            </div>
            <div className="w-20 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
              <a href="">Música</a>
            </div>
            <div className="w-24 h-8 text-zinc-100 text-md font-semibold bg-white/10 text-center rounded-2xl flex justify-center items-center hover:bg-white/15 cursor-pointer">
              <a href="">Podcast</a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {album.map((album) => (
              <AlbumItem
                title={album.Title}
                src={album.UrlCape}
                alt={album.AltCape}
              />
            ))}
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Gabriel Villarinho
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            {dailyMix.map((artist, key) => (
              <DailyMix
                title={artist.Name}
                src={artist.UrlImage}
                alt={artist.AltImage}
                count={key + 1}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
