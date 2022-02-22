import React, { useState } from "react";
import type { NextPage } from "next";

import styles from "../../styles/FicsOnly.module.css";
import listStyles from "../../styles/ZineItemList.module.css";

import { ZineItemType, zineList } from "../../lib/zine";
import { ProseType } from "../../lib/prose";
import ProseItem from "../../components/zine-items/Prose";

const FicsOnly: NextPage = () => {
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
    <div className={listStyles.listContainer}>
      <h2>Fics:</h2>
      {zineList.map((item, idx) =>
        item.type == ZineItemType.Prose ? (
          <a
            key={idx}
            className={listStyles.listItem}
            onClick={() => showItem(idx)}
            tabIndex={0}
          >
            <strong>&quot;{(item.content as ProseType).title}&quot;</strong> by{" "}
            {item.content.author.name} <span>- {item.content.ship}</span>
          </a>
        ) : null
      )}
    </div>
  ) : (
    <div className={styles.ficContainer}>
      <ProseItem prose={zineList[itemIndex].content as ProseType} />
      <a className={listStyles.listItem} onClick={() => hideItem()}>
        &lt; Back to list
      </a>
    </div>
  );
};

export default FicsOnly;
