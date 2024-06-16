import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        This project was coded by Zama Andile Dlamini and is{" "}
        <a
          href="https://github.com/Andile18"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-source code
        </a>{" "}
        on Github and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
