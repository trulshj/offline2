import type { NextPage } from "next";
import Link from "next/link";
import NumberButton from "../components/NumberButton";
import { buttonType } from "../components/NavList";

import styles from "../styles/about_pages/About.module.css";
import utility from "../styles/Utility.module.css";

const About: NextPage = () => {
  const buttons: buttonType[] = [
    { href: "/about/faq", text: "FAQ" },
    { href: "/about/mods", text: "MODS" },
    { href: "/about/contributors", text: "CONTRIBUTORS" },
  ];
  return (
    <div className={styles.container + " " + utility.borderThickTop}>
      <h2>About</h2>
      <p>All the Miya content, all in one place</p>
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

export default About;
