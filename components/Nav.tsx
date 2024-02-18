import { Component, createEffect, createSignal } from "solid-js";
import styles from "../css/Nav.module.css"

const Nav: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);

  return (
    <nav class={styles.nav}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </nav>
  );
};

export default Nav;