import type { NextPage } from "next";
import Link from "next/link";
import NumberButton from "../components/NumberButton";
import { buttonType } from "../components/NavList";

import styles from "../styles/about_pages/About.module.css";

const About: NextPage = () => {
  const buttons: buttonType[] = [
    { href: "/about/faq", text: "FAQ" },
    { href: "/about/mods", text: "Mods" },
    { href: "/about/contributors", text: "Contributors" },
  ];
  return (
    <div className={styles.container}>
      <h2>About</h2>
      <p>
        For all Adam lovers, an upcoming website featuring art, prose, and
        poetry of Adam/Shindo Ainosuke in love and being loved.
      </p>
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
