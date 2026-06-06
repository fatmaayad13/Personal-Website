import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from "./components/About/About";
// import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Artwork } from "./components/Artwork/Artwork";
import { Contact } from "./components/Contact/Contact";
import { Intro } from './components/Intro/Intro.jsx';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
  <div className={styles.App}> 
      <Navbar />
      <Intro />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Artwork />
      <Contact />
      <Analytics />


  </div>
  );
}

export default App;
