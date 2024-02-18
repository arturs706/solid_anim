import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import styles from "../../css/Herosection.module.css";
import imageSrc from "../../public/images/nails.svg";
import gsap from "gsap";


const Herosection: Component = () => {
  const [loadingProgress, setLoadingProgress] = createSignal(1);

  createEffect(() => {
    let main_container = document.querySelector(`.${styles.main}`);

    if (!main_container) {
      return;
    }

    const target = { progress: loadingProgress() };
    const backkground_animation = gsap.to(main_container, {
      duration: 0.15,
      backgroundColor: "#0C0606",
      ease: "power1.inOut",
    });
    const animation = gsap.to(target, {
      duration: 1.3,
      progress: 100,
      roundProps: { progress: 1 },
      onUpdate: () => {
        setLoadingProgress(target.progress);
      },
    });

    if (loadingProgress() === 100 && main_container !== null) {
      const tl = gsap.to(main_container, {
        duration: 1,
        y: "-100%",
        ease: "power1.inOut",
        onComplete: () => {
            main_container?.remove();
        },
      });
    }

    onCleanup(() => {
      backkground_animation.kill();
      animation.kill();
    });
  });

  return (
    <main class={styles.main}>
      <img src={imageSrc} alt="Description of the image" width="180px" height="180px" />
      <h3>{loadingProgress()}%</h3>
      <div class={styles.loading}>
        <div
          class={styles.loader5}
          style={{ width: `${loadingProgress()}%` }}
        ></div>
      </div>
    </main>
  );
};

export default Herosection;
