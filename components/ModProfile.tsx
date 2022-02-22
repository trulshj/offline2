import utility from "../styles/Utility.module.css";

interface ModProfileProps {
  username: string;
  url: string;
  role: string;
  experience: string[];
}

export const mods: ModProfileProps[] = [
  {
    username: "Ru",
    url: "",
    role: "Organization, Socials, and Communication Mod",
    experience: [
      "<a href='https://vntx.carrd.co/#z' target='_blank' rel='noreferrer'>Carrd Portfolio with more info</a>",
    ],
  },
  {
    username: "fishnobi",
    url: "https://twitter.com/fishnobi",
    role: "Graphics, Art, Web Design Mod",
    experience: [
      "Formatting Mod for <a href='https://twitter.com/sk8TTSzine' target='_blank' rel='noreferrer'>Sk8 Through the Seasons zine</a>",
      "General, Art & Formatting Mod for <a href='https://twitter.com/sk8auzine' target='_blank' rel='noreferrer'>Sk8 AU zine</a>",
      "Graphics Mod for <a href='https://twitter.com/acscrapbookzine' target='_blank' rel='noreferrer'>Animal Crossing Scrapbook zine</a>",
      "Art & Formatting Mod for <a href='https://twitter.com/sexpositivebnha' target='_blank' rel='noreferrer'>Sex Positive BNHA zine</a> [nsfw]",
    ],
  },
  {
    username: "Addie",
    url: "https://twitter.com/qdverti",
    role: "Organization Mod, Beta Reader",
    experience: [
      "<a href='https://theinnerdarknesss.carrd.co/' target='_blank' rel='noreferrer'>Carrd Portfolio with more info</a>",
    ],
  },
  {
    username: "Vlatypus",
    url: "https://mobile.twitter.com/backpedaled_",
    role: "Social Media Mod",
    experience: [
      //"<a href='' target='_blank' rel='noreferrer'></a>"
    ],
  },
  {
    username: "Elliot",
    url: "https://mobile.twitter.com/einsamax",
    role: "Intern",
    experience: [
      //"<a href='' target='_blank' rel='noreferrer'></a>"
    ],
  },
];

export default function ModProfile({
  username,
  url,
}: Partial<ModProfileProps>) {
  return (
    <h3>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={utility.textShadow}
      >
        @{username?.toUpperCase()}
      </a>
    </h3>
  );
}
