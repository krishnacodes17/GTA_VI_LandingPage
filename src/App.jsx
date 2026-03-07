import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return <main>
    <NavBar />
    <Hero />
    <FirstVideo />
    <Jason />
  </main>;
}

export default App;
