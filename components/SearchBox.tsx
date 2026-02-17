"use client";

import styles from "@/styles/SearchBox.module.css";

export default function SearchBox() {
  return (
    <input
      type="text"
      placeholder="カフェ名で検索"
      className={styles.input}
    />
  );
}
