import Image from "next/image";
import { MerchType } from "../../lib/merch";
import styles from "../../styles/MerchItem.module.css";
import utility from "../../styles/Utility.module.css";
import Author from "../Author";

export interface MerchItemProps {
  merch: MerchType;
}

export default function MerchItem({ merch }: MerchItemProps) {
  return (
    <div className={styles.container}>
      <Author author={merch.author} />

      {merch.thumbnail ? (
        <div className={styles.imageContainer}>
          <Image
            onContextMenu={(e) => {
              e.preventDefault();
            }}
            src={merch.thumbnail}
            alt={`${merch.author.name}'s merch thumbnail`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ) : null}

      <a href={merch.resource} download>
        <button
          className={`${styles.downloadButton} ${utility.textShadow} ${utility.border}`}
        >
          <i className="fa fa-download"></i> DOWNLOAD
        </button>
      </a>
    </div>
  );
}
