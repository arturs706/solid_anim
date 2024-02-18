import { Component, createSignal, createEffect } from "solid-js";
import Herosection from "../components/mainpage/Herosection";
import Mainsection from "../components/mainpage/Mainsection";
import Secondsection from "../components/mainpage/Secondsection";

const Home: Component = () => {
  const [showMainSection, setShowMainSection] = createSignal(true);

  createEffect(() => {
    setTimeout(() => {
      setShowMainSection(false);
    }, 1900); // Set to 1 second (1000 milliseconds)
  });

  return (
    <>
      <Herosection />
      {showMainSection() && <Mainsection />}
      <Secondsection />
    </>
  );
};

export default Home;
