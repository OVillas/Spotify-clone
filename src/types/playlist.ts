import { Music } from "./music";

export type Playlist = {
    Name: string;
    UrlImage: string;
    AltImage: string;
    MadeFor: string;
    Musics?: Music[];
}