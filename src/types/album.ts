import { Music } from "./music";

export type Album = {
  Title: string;
  Artist: string;
  UrlCape: string;
  AltCape: string;
  Musics?: Music[];
};
