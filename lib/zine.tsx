import { artList, ArtType } from "./art";
import { proseList, ProseType } from "./prose";

export enum ZineItemType {
  Art,
  Prose,
}

interface ZineItem {
  type: ZineItemType;
  content: ArtType | ProseType;
}

const artZineItems = artList.map(
  (x) => ({ type: ZineItemType.Art, content: x } as ZineItem)
);

const proseZineItems = proseList.map(
  (x) => ({ type: ZineItemType.Prose, content: x } as ZineItem)
);

export const zineList: ZineItem[] = [
  artZineItems[18], // mingyss (art)
  proseZineItems[1], // cavalierious (fic)
  artZineItems[0], // aurity (art)
  artZineItems[2], // bubunji (art)
  proseZineItems[5], // au ruler (fic)
  artZineItems[3], // cheshire (art)
  artZineItems[14], // neaekis (art)
  proseZineItems[2], // coldsobashouto (fic)
  artZineItems[4], // congercine (art)
  artZineItems[17], // sketchypixel (art)
  proseZineItems[0], // alex (fic)
  artZineItems[5], // furuichus (art)
  artZineItems[12], // theo (art)
  proseZineItems[3], // dev & krayonela (collab)
  artZineItems[6], // hyourin (art)
  proseZineItems[4], // kayloayl (fic)
  artZineItems[9], // lenny (art)
  proseZineItems[6], // crow (fic)
  artZineItems[10], // lex (art)
  artZineItems[11], // lillachan (art)
  proseZineItems[7], // sunflowersailor (fic)
  artZineItems[1], // bignewts (art)
  artZineItems[13], // momo (art)
  proseZineItems[8], // tyytyy (fic)
  artZineItems[15], // pixelflowers (art)
  proseZineItems[10], // wishmoon (fic)
  artZineItems[16], // ridasu (art)
  proseZineItems[9], // vic (fic)
  artZineItems[7], // krayonrela (art)
];
