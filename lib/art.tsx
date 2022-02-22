import {
  Auritry,
  AuthorType,
  Bignewts,
  bubunji,
  Cheshire,
  Congercine,
  Fruichus,
  Hyourin7372,
  krayonela,
  Lenny,
  lex_catto,
  lillachan,
  Mingyss,
  Momo,
  neaekis,
  pixelflowerss,
  Ridasu,
  SketchyPixel,
  Theo,
} from "./authors";

export interface ArtType {
  id: number;
  author: AuthorType;
  image: StaticImageData;
}

import auritryArt from "../public/art/Auritry_Final.png";
import biyaBubunArt from "../public/art/biya-bubun.ji.png";
import cheshireArt from "../public/art/Cheshire_Final-1.png";
import krayonelaCollabArt from "../public/art/Collab_Dev_krayonela_Final-1.png";
import congercineArt from "../public/art/CongercineFinal-1.png";
import fruichusArt from "../public/art/Fruichus_final.png";
import hyourinArt from "../public/art/Hyourin7372_Final-1.png";
import krayonelaArt from "../public/art/krayonela-1.png";
import lennyArt from "../public/art/lennymiyacupcakes.png";
import lexCattoArt from "../public/art/lex_catto_Final.png";
import lillachanArt from "../public/art/lillachan-1.png";
import minmingyssArt from "../public/art/Minmingyss_Final.png";
import bignewtsArt from "../public/art/miya_zine_bignewts.png";
import momoArt from "../public/art/Momo_Final-1.png";
import naekisArt from "../public/art/neaekis_Final.png";
import pixelflowerssArt from "../public/art/Pixelflowerss_final.png";
import ridasuArt from "../public/art/Ridasu_Final-1.png";
import sketchyPixelArt from "../public/art/SketchyPixel.png";
import theoArt from "../public/art/Theo_Final-1.png";

export const artList: ArtType[] = [
  {
    id: 0,
    author: Auritry,
    image: auritryArt,
  },
  {
    id: 1,
    author: Bignewts,
    image: bignewtsArt,
  },
  {
    id: 2,
    author: bubunji,
    image: biyaBubunArt,
  },
  {
    id: 3,
    author: Cheshire,
    image: cheshireArt,
  },
  {
    id: 4,
    author: Congercine,
    image: congercineArt,
  },
  {
    id: 5,
    author: Fruichus,
    image: fruichusArt,
  },
  {
    id: 6,
    author: Hyourin7372,
    image: hyourinArt,
  },
  {
    id: 7,
    author: krayonela,
    image: krayonelaArt,
  },
  {
    id: 8,
    author: krayonela,
    image: krayonelaCollabArt,
  },
  {
    id: 9,
    author: Lenny,
    image: lennyArt,
  },
  {
    id: 10,
    author: lex_catto,
    image: lexCattoArt,
  },
  {
    id: 11,
    author: lillachan,
    image: lillachanArt,
  },
  {
    id: 12,
    author: Theo,
    image: theoArt,
  },
  {
    id: 13,
    author: Momo,
    image: momoArt,
  },
  {
    id: 14,
    author: neaekis,
    image: naekisArt,
  },
  {
    id: 15,
    author: pixelflowerss,
    image: pixelflowerssArt,
  },
  {
    id: 16,
    author: Ridasu,
    image: ridasuArt,
  },
  {
    id: 17,
    author: SketchyPixel,
    image: sketchyPixelArt,
  },
  {
    id: 18,
    author: Mingyss,
    image: minmingyssArt,
  },
];
