import { Component, createEffect, createSignal } from "solid-js";
import styles from "../css/Nav.module.css"

const Nav: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);

  return (
    <nav class={styles.nav}>
      <div>1</div>
    </nav>
  );
};

export default Nav;