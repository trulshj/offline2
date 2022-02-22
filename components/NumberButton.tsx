import React from "react";
import styles from "../styles/NumberButton.module.css";

interface NumberButtonProps {
  children: React.ReactNode;
}

const NumberButton = ({ children }: NumberButtonProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default NumberButton;
