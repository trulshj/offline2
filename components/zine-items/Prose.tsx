import styles from "../../styles/Prose.module.css";
import utility from "../../styles/Utility.module.css";

import { ProseType } from "../../lib/prose";
import Author from "../Author";

import { useEffect, useRef } from "react";

export interface ProseItemProps {
  prose: ProseType;
}

export default function ProseItem({ prose }: ProseItemProps) {
  const ficContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ficContainer.current?.scrollTo({ top: 0 });
  });

  return (
    <div
      className={styles.container + " " + utility.borderThickTop}
      ref={ficContainer}
    >
      <div className={styles.proseTitle}>
        <h2>{prose.title}</h2>
        <div>
          <Author author={prose.author} />
        </div>
      </div>
      <div className={styles.prose}>
        {prose.paragraphs?.map((paragraph, idx) => (
          <p
            className={
              paragraph.trim().length == 1 ? styles.centered : undefined
            }
            key={idx}
            dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
          ></p>
        ))}
      </div>
    </div>
  );
}
