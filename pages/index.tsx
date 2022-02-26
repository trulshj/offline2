import type { NextPage } from "next";

import styles from "../styles/Index.module.css";
import utility from "../styles/Utility.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container + " " + utility.borderThickTop}>
      <p>
        Welcome to the OFFLINE Miya Zine!
        <br />
        <br />- OFFLINE Moderators
      </p>
    </div>
  );
};

export default Home;
