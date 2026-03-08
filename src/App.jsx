import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/secondVideo";
import Lucia from "./sections/Lucia";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return <main>
    <NavBar />
    <Hero />
    <FirstVideo />
    <Jason />

    <SecondVideo />
    <Lucia />




  </main>;
}

export default App;
