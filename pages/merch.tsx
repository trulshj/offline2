import { NextPage } from "next";
import { useState } from "react";
import MerchItem from "../components/zine-items/Merch";
import { merchList } from "../lib/merch";
import styles from "../styles/Merch.module.css";
import utility from "../styles/Utility.module.css";

const Merch: NextPage = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [showItem, setShowItem] = useState(false);

  return (
    <div
      className={`${styles.container} ${utility.borderThickTop} ${
        showItem ? styles.wide : null
      }`}
    >
      <h1>MERCH</h1>
      {showItem ? (
        <>
          <MerchItem merch={merchList[itemIndex]} />
          <a
            className={utility.textShadow}
            tabIndex={0}
            onClick={() => {
              setShowItem(false);
            }}
          >
            &lt; Back to list
          </a>
        </>
      ) : (
        merchList.map((item, idx) => (
          <>
            {item.released ? (
              <a
                key={idx}
                tabIndex={0}
                className={utility.textShadow}
                onClick={() => {
                  setShowItem(true);
                  setItemIndex(idx);
                }}
              >
                <strong>{item.type}</strong> by {item.author.name}
              </a>
            ) : null}
          </>
        ))
      )}
    </div>
  );
};

export default Merch;
