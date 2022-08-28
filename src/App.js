import logo from "./logo.svg";
import "./App.css";
import { Button as ParcelButton } from "testparcellibrary";
import { Button as RollupButton } from "testrolluplibrary";
// import { Button as SnowpackButton } from "testsnowpacklibrary";
// import { Button as WebpackButton } from "testwebpacklibrary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ParcelButton
          onClick={() => {
            console.log("parcel");
          }}
        >
          I am a parcel built button
        </ParcelButton>

        <RollupButton
          onClick={() => {
            console.log("rollup");
          }}
        >
          I am a rollup built button
        </RollupButton>

        {/*<SnowpackButton
          onClick={() => {
            console.log("snowpack");
          }}
        >
          I am a snowpack built button
        </SnowpackButton>

        {/*<WebpackButton
          onClick={() => {
            console.log("webpack");
          }}
        >
          I am a webpack built button
        </WebpackButton>*/}
      </header>
    </div>
  );
}

export default App;
