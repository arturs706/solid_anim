import { Component, onCleanup, onMount } from "solid-js";
import styles from "../../css/Mainpage.module.css";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Mainpage: Component = () => {
    onMount(() => {
        const revealContainers = document.querySelectorAll(".revealelement");
        gsap.utils.toArray(revealContainers).forEach((container, index) => {
            let htmlContainer = container as HTMLElement;
            let image = htmlContainer.querySelector("img");
            if (image) {
                let tl = gsap.timeline();
                tl.set(htmlContainer, {
                    autoAlpha: 1,
                });
                tl.from(htmlContainer, 2.5, {
                    yPercent: -150,
                    ease: "power3.out",
                    delay: index * 0.3,

                });
                tl.from(image, 2.5, {
                    yPercent: 150,
                    scale: 1,
                    delay: -2.5,
                    ease: "power3.out",
                });
            }
        });

    });
    onCleanup(() => {
        ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
        });
    }
    );      

    return (
        <main class={styles.main}>
            <section class={styles.firstsection}>
                <div class={`${styles.reveal} revealelement`}>
                    <img src="/images/img_1.webp" alt="Solid logo" style={{ width: "300px", height: "auto" }} />
                </div>
                <div class={`${styles.reveal} revealelement`}>
                    <img src="/images/img_3.webp" alt="Solid logo" style="width: 340px; height: 524px; object-fit: cover; object-position: 50% 0;"/>
                </div>
                <div class={`${styles.reveal} revealelement`}>
                    <img src="/images/img_2.webp" alt="Solid logo" style={{ width: "340.6px", height: "auto" }} />
                </div>
            </section>
        </main>
    );
};

export default Mainpage;
