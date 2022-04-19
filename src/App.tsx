import React, { useEffect } from "react";
import Heading from "./Components/Heading";
import Links from "./Components/Links";
import AboutMe from "./Components/AboutMe";

export default function App() {
  const mainRef = React.useRef<HTMLElement>(null);

  const change3DRotation = (e: MouseEvent) => {
    const factor = 10;
    const rotateX = (
      (factor * e.y) / document.documentElement.clientHeight -
      factor
    ).toFixed(1);
    const rotateY = (
      (factor * e.x) /
      document.documentElement.clientWidth
    ).toFixed(1);
    mainRef.current!.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", change3DRotation);
    return () => document.removeEventListener("mousemove", change3DRotation);
  }, []);

  return (
    <main className="three-d-main" ref={mainRef}>
      <Heading />
      <div className="section three-d image myImage"></div>
      <Links />
      <AboutMe />
    </main>
  );
}
