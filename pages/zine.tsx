import type { NextPage } from "next";
import Link from "next/link";
import NumberButton from "../components/NumberButton";
import { buttonType } from "../components/NavList";

import styles from "../styles/ZineNav.module.css";
import utility from "../styles/Utility.module.css";

const ZineNav: NextPage = () => {
  const buttons: buttonType[] = [
    { href: "/zine/full", text: "FULL ZINE", color: "white" },
    { href: "/zine/art", text: "ART ONLY", color: "white" },
    { href: "/zine/fics", text: "WRITING ONLY", color: "white" },
  ];
  return (
    <div className={styles.container + " " + utility.borderThickTop}>
      <h2>How do you want to view the zine?</h2>
      <div className={styles.buttonContainer}>
        {buttons.map((button, idx) => (
          <Link key={idx} href={button.href}>
            <a>
              <NumberButton>{button.text}</NumberButton>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ZineNav;
