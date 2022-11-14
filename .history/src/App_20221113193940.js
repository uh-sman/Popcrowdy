import "./App.css";
import { Navbar, Hero } from "./components";
import SubCard from "./components/Section/SubCard";
import SubNav from "./components/SubNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Hero />
      <SubCard />
    </div>
  );
}

export default App;
