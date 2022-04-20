import React, { useEffect, useState } from "react";
import Heading from "./Components/Heading";
import Links from "./Components/Links";
import AboutMe from "./Components/AboutMe";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
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

  const changeTheme = () => {
    if (darkMode)
      document.getElementsByTagName("html")[0].className = "dark-blue";
    else document.getElementsByTagName("html")[0].className = "dark-orange";
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      document.getElementsByTagName("html")[0].className = "dark-orange";
    else document.getElementsByTagName("html")[0].className = "dark-blue";

    document.addEventListener("mousemove", change3DRotation);
    return () => document.removeEventListener("mousemove", change3DRotation);
  }, []);

  return (
    <main className="three-d-main" ref={mainRef}>
      <div className="section" onClick={changeTheme}>
        <div
          className="three-d theme-changer"
          three-d-text={`Dark Mode [${darkMode ? "✓" : "x"}]`}
        >
          Dark Mode [{darkMode ? "✓" : "x"}]
        </div>
      </div>
      <Heading />
      <div className="section three-d image myImage"></div>

      <Links />
      <AboutMe isDarkMode={darkMode} />
    </main>
  );
}
