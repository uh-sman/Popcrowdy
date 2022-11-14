import "./App.css";
import { Navbar, Hero } from "./components";
import Scroll from "./components/Section/Scroll";
import SubCard from "./components/Section/SubCard";
import SubNav from "./components/SubNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Hero />
      <SubCard />
      <Scroll />
    </div>
  );
}

export default App;
