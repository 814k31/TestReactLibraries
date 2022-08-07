import { ReactNode } from "react";
import styles from "./Button.module.scss";

export function Button(props: { onClick(): void; children: ReactNode }) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
