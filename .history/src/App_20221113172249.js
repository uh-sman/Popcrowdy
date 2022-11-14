import "./App.css";
import { Navbar, Hero } from "./components";
import SubNav from "./components/SubNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Hero />
    </div>
  );
}

export default App;
