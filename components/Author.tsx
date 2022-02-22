import { AuthorType } from "../lib/authors";

import styles from "../styles/Author.module.css";
import utility from "../styles/Utility.module.css";
interface AuthorProps {
  author: AuthorType;
  ship?: string;
  collabArt?: boolean;
}

export default function Author({ author, ship }: AuthorProps) {
  return (
    <div className={styles.container + " " + utility.border}>
      <div className={styles.socials}>
        {!author.twitter ? null : (
          <a href={author.twitter} target="_blank" rel="noreferrer">
            <h4>Twitter</h4>
          </a>
        )}
        {!author.tumblr ? null : (
          <a href={author.tumblr} target="_blank" rel="noreferrer">
            <h4>Tumblr</h4>
          </a>
        )}
        {!author.instagram ? null : (
          <a href={author.instagram} target="_blank" rel="noreferrer">
            <h4>Instagram</h4>
          </a>
        )}
        {!author.ao3 ? null : (
          <a href={author.ao3} target="_blank" rel="noreferrer">
            <h4>AO3</h4>
          </a>
        )}
      </div>
      {ship ? <h4>Ship: {ship}</h4> : null}
    </div>
  );
}
