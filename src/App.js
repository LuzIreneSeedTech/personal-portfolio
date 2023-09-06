import "./App.css";
import "./styles/style.css";
import Header from "./organisms/Header";
import Landing from "./organisms/Landing";

function App() {
  return (
    <>
      <div className="landing">
        <Header />
        <Landing />
      </div>
    </>
  );
}

export default App;
