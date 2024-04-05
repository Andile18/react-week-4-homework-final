import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        This project was coded by Kristin Kessler and is{" "}
        <a href="https://github.com/Krizz1103/react-week-4-homework">
          {" "}
          open-source code
        </a>{" "}
        on Github and hosted on <a href="">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
