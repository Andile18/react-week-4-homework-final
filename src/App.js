import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        This project was coded by Kristin Kessler and is{" "}
        <a
          href="https://github.com/Krizz1103/react-week-4-homework-final"
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
