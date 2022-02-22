import { useState } from "react";
import Link from "next/link";
import NumberButton from "./NumberButton";
import styles from "../styles/NavList.module.css";

export interface buttonType {
  href: string;
  text: string;
  color?: string;
}

export default function NavList() {
  const [showMenu, setShowMenu] = useState(false);

  const buttons: buttonType[] = [
    { href: "/", text: "HOME" },
    { href: "/about", text: "ABOUT" },
    { href: "/zine", text: "ZINE" },
  ];

  return (
    <nav
      className={`${styles.navList} ${
        showMenu ? styles.activeMenu : styles.inactiveMenu
      }`}
    >
      {buttons.map((button, idx) => (
        <Link key={idx} href={button.href}>
          <a onClick={() => setShowMenu(false)}>
            <NumberButton>{button.text}</NumberButton>
          </a>
        </Link>
      ))}
      <button
        className={`${styles.menuButton} ${
          showMenu ? styles.activeButton : styles.inactiveButton
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>
    </nav>
  );
}
