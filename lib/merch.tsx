import {
  Auritry,
  AuthorType,
  Congercine,
  fish,
  Fruichus,
  futaroni,
  kiki,
  krayonela,
  miiboChanh,
  Mingyss,
  studioPaigy,
} from "./authors";

export interface MerchType {
  author: AuthorType;
  resource: string;
  thumbnail?: StaticImageData;
  type: string;
  released: boolean;
}

import auritryThumbnail from "../public/merch/Auritry_emotes_final/IMG_0437.png";
import krayonelaThumbnail from "../public/merch/Emotes - krayonela/rawr.png";
import congercineThumbnail from "../public/merch/CongercneFINAL-MIYA-Phonebg-1.png";
import fishThumbnail from "../public/merch/fish_final.png";
import fruichusThumbnail from "../public/merch/Fruichus_final_cmyk.png";
import futaroniThumbnail from "../public/merch/futaroni_icon_final.png";
import kikiThumbnail from "../public/merch/Kiki_Wallpaper_Final.png";
import miiboChanThumbnail from "../public/merch/MiiboChanh_Final.png";
import mingyssThumbnail from "../public/merch/Minmingyss_Final1.png";
import studioPaigyThumbnail from "../public/merch/StudioPaigy_Stickersheet_BG.png";

export const merchList: MerchType[] = [
  {
    author: Auritry,
    resource: "../merch/Emotes-auritry.zip",
    thumbnail: auritryThumbnail,
    type: "Emotes",
    released: true,
  },
  {
    author: krayonela,
    resource: "../merch/Emotes-krayonela.zip",
    thumbnail: krayonelaThumbnail,
    type: "Emotes",
    released: true,
  },
  {
    author: Congercine,
    resource: "../merch/congercine.zip",
    thumbnail: congercineThumbnail,
    type: "Lockscreen",
    released: true,
  },
  {
    author: fish,
    resource: "../merch/fish_final.png",
    thumbnail: fishThumbnail,
    type: "Note template",
    released: true,
  },
  {
    author: Fruichus,
    resource: "../merch/Fruichus_final_cmyk.png",
    thumbnail: fruichusThumbnail,
    type: "Printable postcard",
    released: true,
  },
  {
    author: futaroni,
    resource: "../merch/futaroni_icon_final.png",
    thumbnail: futaroniThumbnail,
    type: "Icon",
    released: true,
  },
  {
    author: kiki,
    resource: "../merch/Kiki_Wallpaper_Final.png",
    thumbnail: kikiThumbnail,
    type: "Phone wallpaper",
    released: true,
  },
  {
    author: miiboChanh,
    resource: "../merch/MiiboChanh_Final.png",
    thumbnail: miiboChanThumbnail,
    type: "Desktop wallpaper",
    released: true,
  },
  {
    author: Mingyss,
    resource: "../merch/Minmingyss_Final1.png",
    thumbnail: mingyssThumbnail,
    type: "Phone wallpapers",
    released: true,
  },
  {
    author: studioPaigy,
    resource: "../merch/StudioPaigy_Stickersheet_ART.png",
    thumbnail: studioPaigyThumbnail,
    type: "Digital stickersheet",
    released: true,
  },
];
