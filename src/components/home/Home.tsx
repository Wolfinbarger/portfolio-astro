import "./home.scss";

import Hero from "../hero/Hero.tsx";
import Skills from "../skills/Skills.tsx";
import About from "../about/About.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      {/* <div className="content">
        <About />
      </div> */}
    </>
  );
}
