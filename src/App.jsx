import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Hero/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
