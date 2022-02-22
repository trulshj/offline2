import { AuthorType } from "../lib/authors";

import styles from "../styles/Author.module.css";
import utility from "../styles/Utility.module.css";
interface AuthorProps {
  author: AuthorType;
  border?: boolean;
  collabArt?: boolean;
}

export default function Author({ author, border, collabArt }: AuthorProps) {
  return (
    <div className={styles.container + " " + (border ? utility.border : "")}>
      <div className={styles.socials}>
        <h4>
          {collabArt ? "Art by:" : "By:"} {author.name}
        </h4>
        {!author.twitter ? null : (
          <a href={author.twitter} target="_blank" rel="noreferrer">
            <h4 className={utility.textShadow}>Twitter</h4>
          </a>
        )}
        {!author.tumblr ? null : (
          <a href={author.tumblr} target="_blank" rel="noreferrer">
            <h4 className={utility.textShadow}>Tumblr</h4>
          </a>
        )}
        {!author.instagram ? null : (
          <a href={author.instagram} target="_blank" rel="noreferrer">
            <h4 className={utility.textShadow}>Instagram</h4>
          </a>
        )}
        {!author.ao3 ? null : (
          <a href={author.ao3} target="_blank" rel="noreferrer">
            <h4 className={utility.textShadow}>AO3</h4>
          </a>
        )}
      </div>
    </div>
  );
}
