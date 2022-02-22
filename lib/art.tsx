import backCover from "../public/Adam in Love Back Cover lillachan-1.png";
import frontCover from "../public/Adam in Love Cover lillachan-1.png";
import badCollab from "../public/Adam_in_love_collab_bad-1.png";
import luDoscopeArt from "../public/Adam_in_Love_Fantasy_AU_Lu.doscope_-1.png";
import kamedoriCollab from "../public/Adam_in_love_kame-dori_collab_shadow_tada_ai-1.png";
import kameDoriSpread from "../public/kamedori-spread.png";
import emailFic from "../public/Illustration (3).png";
import mirageprinceCollab from "../public/AdaminLove_EDENSnake_MiragePrince-1.png";
import tyulezhikArt from "../public/adaminlove_tadaai_tyulezhik-1.png";
import burnsArt from "../public/AIL-ADAREKI-BURNS-1.png";
import burnsCollab from "../public/AIL-ADAREKI-BURNS-COLLAB-1.png";
import badArt from "../public/BAD_BAD_TIME_adam_in_love-1.png";
import crumbsArt from "../public/CRUMBS_AIL_LoveBlossom-1.png";
import elianthosArt from "../public/Elianthos_TadaAi art1_AiL zine-1.png";
import elianthoscollab from "../public/Elianthos_TadaAi art2_collab w Queenie_AiL zine-1.png";
import grandtacoArt from "../public/ADAM_IN_LOVE-Dk JOE_CHERRY_ADAM_GRANDTACOSUPREM-1.png";
import lizardCollab from "../public/Lu.doscope__That_lizard_Collab_.png";
import krynnea1 from "../public/Krynnea1.png";
import krynnea2 from "../public/Krynnea2.png";
import {
  AuthorType,
  bad,
  burns,
  crumbs,
  elianthos,
  grandTaco,
  kamedori,
  krynnea,
  lillachan,
  ludoscope,
  miragePrince,
  tyulezhik,
} from "./authors";

export interface ArtType {
  id: number;
  author: AuthorType;
  image: StaticImageData;
}

export const artList: ArtType[] = [
  {
    id: 0,
    author: lillachan,
    image: frontCover,
  },
  {
    id: 1,
    author: bad, // collab
    image: badCollab,
  },
  {
    id: 2,
    author: ludoscope,
    image: luDoscopeArt,
  },
  {
    id: 3,
    author: kamedori, // collab
    image: kamedoriCollab,
  },
  {
    id: 4,
    author: kamedori,
    image: kameDoriSpread,
  },
  {
    id: 5,
    author: kamedori,
    image: kameDoriSpread,
  },
  {
    id: 6,
    author: tyulezhik, // collab
    image: emailFic,
  },
  {
    id: 7,
    author: grandTaco,
    image: grandtacoArt,
  },
  {
    id: 8,
    author: miragePrince,
    image: mirageprinceCollab,
  },
  {
    id: 9,
    author: tyulezhik,
    image: tyulezhikArt,
  },
  {
    id: 10,
    author: burns, // collab
    image: burnsCollab,
  },
  {
    id: 11,
    author: burns,
    image: burnsArt,
  },
  {
    id: 12,
    author: bad,
    image: badArt,
  },
  {
    id: 13,
    author: crumbs,
    image: crumbsArt,
  },
  {
    id: 14,
    author: elianthos,
    image: elianthosArt,
  },
  {
    id: 15,
    author: elianthos, // collab
    image: elianthoscollab,
  },
  {
    id: 16,
    author: krynnea,
    image: krynnea1,
  },
  {
    id: 17,
    author: krynnea,
    image: krynnea2,
  },
  {
    id: 18,
    author: ludoscope, // collab
    image: lizardCollab,
  },
  {
    id: 19,
    author: lillachan,
    image: backCover,
  },
];
