import { artList } from "../lib/art";
import { AuthorType } from "../lib/authors";
import { proseList } from "../lib/prose";
import styles from "../styles/about_pages/ContributorItem.module.css";

interface Contributor {
  author: AuthorType;
  position: string;
}

export const contributors: Contributor[] = artList
  .map((x) => {
    return { author: x.author, position: "Artist" };
  })
  .concat(
    proseList.map((x) => {
      return { author: x.author, position: "Writer" };
    })
  )
  .sort(() => Math.random() - 0.5)
  .concat([
    {
      author: { name: "T", github: "https://github.com/trulshj" },
      position: "Web Developer",
    },
  ]);

export default function ContributorItem({ author, position }: Contributor) {
  return (
    <div className={styles.container}>
      <h3>
        {author.name} | {position}{" "}
        {!author.twitter ? null : (
          <>
            |{" "}
            <a href={author.twitter} target="_blank" rel="noreferrer">
              twitter
            </a>{" "}
          </>
        )}
        {!author.ao3 ? null : (
          <>
            |{" "}
            <a href={author.ao3} target="_blank" rel="noreferrer">
              AO3
            </a>{" "}
          </>
        )}
        {!author.tumblr ? null : (
          <>
            |{" "}
            <a href={author.tumblr} target="_blank" rel="noreferrer">
              tumblr
            </a>{" "}
          </>
        )}
        {!author.instagram ? null : (
          <>
            |{" "}
            <a href={author.instagram} target="_blank" rel="noreferrer">
              instagram
            </a>
          </>
        )}
        {!author.github ? null : (
          <>
            |{" "}
            <a href={author.github} target="_blank" rel="noreferrer">
              github
            </a>
          </>
        )}
      </h3>
    </div>
  );
}
