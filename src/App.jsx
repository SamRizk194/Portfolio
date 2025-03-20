import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Hero/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
