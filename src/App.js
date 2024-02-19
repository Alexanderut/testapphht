import logo from './logo.svg';
import './App.css';
import bilde from "./bilde.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={bilde} className="Alex-logo" alt="bare et bilde av alex"/>
        
        
        <h1>Dette er BED-3101</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.uit.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          React er så kult. kom å se på uit sin nettside
        </a>
      </header>
    </div>
  );
}

export default App;
