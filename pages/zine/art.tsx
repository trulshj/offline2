import React, { useState } from "react";
import type { NextPage } from "next";

import styles from "../../styles/ArtOnly.module.css";
import listStyles from "../../styles/ZineItemList.module.css";
import utility from "../../styles/Utility.module.css";

import { ArtType } from "../../lib/art";
import { ZineItemType, zineList } from "../../lib/zine";
import ArtItem from "../../components/zine-items/Art";
import Author from "../../components/Author";

const ArtOnly: NextPage = () => {
  const [showingItem, setShowingItem] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const showItem = (idx: number) => {
    setItemIndex(idx);
    setShowingItem(true);
  };

  const hideItem = () => {
    setItemIndex(-1);
    setShowingItem(false);
  };

  return !showingItem ? (
    <div className={listStyles.listContainer + " " + utility.borderThickTop}>
      <h2>Art:</h2>
      {zineList.map((item, idx) =>
        !(item.type == ZineItemType.Art) ? null : (
          <a
            key={idx}
            className={listStyles.listItem}
            onClick={() => showItem(idx)}
            tabIndex={0}
          >
            {item.content.author.name}
          </a>
        )
      )}
    </div>
  ) : (
    <div className={styles.artContainer}>
      <Author author={zineList[itemIndex].content.author} />
      <ArtItem art={zineList[itemIndex].content as ArtType} />
      <a
        className={listStyles.listItem + " " + utility.border}
        onClick={() => hideItem()}
      >
        &lt; Back to list
      </a>
    </div>
  );
};

export default ArtOnly;
