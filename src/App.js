import "./App.css";
import "./styles/style.css";
import Header from "./organisms/Header";
import Landing from "./organisms/Landing";
import AboutMe from "./organisms/AboutMe";
import Projects from "./organisms/Projects";
import Tools from "./organisms/Tools";
import ContactMe from "./organisms/ContactMe";

function App() {
  return (
    <>
      <div className="landing">
        <Header />
        <Landing />
      </div>

      <div className="about-me">
        <AboutMe />
      </div>

      <div className="projects">
        <Projects />
      </div>

      <div className="tools">
        <Tools />
      </div>

      <div className="contact-me">
        <ContactMe />
      </div>
    </>
  );
}

export default App;
