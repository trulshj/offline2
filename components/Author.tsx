import { AuthorType } from "../lib/authors";

import styles from "../styles/Author.module.css";
import utility from "../styles/Utility.module.css";
interface AuthorProps {
  author: AuthorType;
  border?: boolean;
}

export default function Author({ author, border }: AuthorProps) {
  return (
    <div className={styles.container + " " + (border ? utility.border : "")}>
      <div className={styles.socials}>
        <h4>By: {author.name}</h4>
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
    </div>
  );
}
