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
  artZineItems[0], // lillachan cover front
  artZineItems[7], // grandtaco art (spread)
  proseZineItems[2], // email fic + art by tyulezhik (the pdf quality one)
  proseZineItems[9], // singeji fic
  artZineItems[14], // elianthos non-collab art
  proseZineItems[0], // delaccroix fic
  artZineItems[2], // lu.doscope non-collab art
  proseZineItems[3], // tulip fic
  artZineItems[4], // kamedori comic art
  artZineItems[11], // burns non-collab art
  proseZineItems[12], // queenclaw fic
  proseZineItems[10], // that-lizart fic + lu.doscope art
  proseZineItems[7], // disconomi fic
  artZineItems[12], // bad non-collab art
  artZineItems[8], // marageprince art
  proseZineItems[6], // riye rose fic + burns art
  proseZineItems[15], // ness fic + krynnea art
  proseZineItems[4], // amuk fic
  proseZineItems[1], // smart zelda + kamedori collab
  proseZineItems[13], // treeviking fic
  artZineItems[13], // crumbs art
  proseZineItems[8], // keitora fic
  artZineItems[17], // krynnea art
  proseZineItems[11], // tweilightplants fic + bad art
  proseZineItems[14], // thechaoscryptid fic
  artZineItems[9], // thylezhik non-collab art
  proseZineItems[5], // queenie + elianthos collab
  artZineItems[19], // last page cover
];
