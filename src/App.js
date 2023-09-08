import "./App.css";
import "./styles/style.css";
import Header from "./organisms/Header";
import Landing from "./organisms/Landing";
import AboutMe from "./organisms/AboutMe";
import Projects from "./organisms/Projects";
import Tools from "./organisms/Tools";
import ContactMe from "./organisms/ContactMe";
import Footer from "./organisms/Footer";

function App() {
  return (
    <>
      <div className="landing" id="home">
        <Header />
        <Landing />
      </div>

      <div className="about-me" id="about-me">
        <AboutMe />
      </div>

      <div className="projects" id="projects">
        <Projects />
      </div>

      <div className="tools" id="tools">
        <Tools />
      </div>

      <div className="contact-me" id="contact-me">
        <ContactMe />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
