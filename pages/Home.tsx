import { Component, createSignal, createEffect } from "solid-js";
import Mainpage from "../components/pages/Mainpage";

const Home: Component = () => {
  const [showMainSection, setShowMainSection] = createSignal(true);

  createEffect(() => {
    setTimeout(() => {
      setShowMainSection(false);
    }, 1900); // Set to 1 second (1000 milliseconds)
  });

  return (
    <>
      <Mainpage />
    </>
  );
};

export default Home;
