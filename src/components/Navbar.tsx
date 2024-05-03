import { Bell, ChevronLeft, ChevronRight, CircleUserRoundIcon, Ellipsis, Search, Users2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center bg-zinc-950 h-16 mb-2 shadow-lg justify-between">
      <div className="flex items-center gap-2 ml-4">
        <Ellipsis size={36} />
        <button className="p-1 text-zinc-500 hover:text-white">
          <ChevronLeft size={36} />
        </button>
        <button className="p-1 text-zinc-500 hover:text-white">
          <ChevronRight size={36} />
        </button>
      </div>

      <div className="w-96 mb-2">
        <div className="relative w-full min-w-[200px] h-10">
          <div className="absolute grid w-5 h-5 place-items-center top-2/4 left-2 -translate-y-2/4">
            <Search size={24} />
          </div>
          <input
            className="peer w-full h-12 bg-white/20 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 rounded-full placeholder:text-zinc-500 pl-12" 
            placeholder="O que você quer ouvir?"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 mr-12">
        <Bell size={20} />
        <Users2 size={20} />
        <CircleUserRoundIcon size={48} />
      </div>
    </nav>
  );
}
