import "./App.css";
import "./styles/style.css";
import Header from "./organisms/Header";
import Landing from "./organisms/Landing";
import AboutMe from "./organisms/AboutMe";

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
    </>
  );
}

export default App;
