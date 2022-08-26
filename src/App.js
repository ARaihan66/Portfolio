import './App.css';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Skill from './Component/Skill.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
    </div>

  );
}

export default App;
