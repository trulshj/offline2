import styles from "../styles/Header.module.css";
import Image from "next/image";

import titleLogo from "../public/offline_logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const { asPath, pathname } = useRouter();

  console.log(asPath);

  return (
    <header className={styles.header}>
      <div
        className={
          styles.logoContainer +
          " " +
          (asPath.includes("zine") ? styles.smallerHeader : null)
        }
      >
        <Image
          src={titleLogo}
          layout="responsive"
          alt="OFFLINE MIYA ZINE LOGO"
        ></Image>
      </div>
    </header>
  );
};

export default Header;
