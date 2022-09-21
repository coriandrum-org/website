import logo from './logo.svg';
import logo2 from './logo2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo2} className="App-logo2" alt="logo" />
        <h1>
          Coming soon...
        </h1>
        <p>
          coriandrum org
        </p>

        <input
          type="password"
          placeholder="escriba su password"
          inputmode="numeric"

        />

      </header>
    </div>
  );
}

export default App;
