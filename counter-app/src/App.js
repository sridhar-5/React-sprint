import React from "react";
import "./App.css";
import { Buttons } from "./components/Letter.jsx";

function App() {
  const [count, setCount] = React.useState(0);

  const Decrease = () => {
    setCount(count - 1);
  };
  const Increase = () => {
    setCount(count + 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <React.Fragment>
      <div className="w3-top">
        <div className="w3-bar w3-red w3-padding w3-card">
          <div
            className="w3-bar-item"
            style={{ textAlign: "center", float: "none" }}
          >
            Counter by sridhar
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ textAlign: "center", marginTop: 100 }}
      >
        <div className="child">
          <h1 style={{ fontSize: 80 }}>&nbsp;Counter</h1>
          <div className="container" style={{ marginTop: -60 }}>
            <h1 style={{ fontSize: 150, marginBottom: -10 }}>
              <span id="value">{count}</span>
            </h1>
          </div>

          <Buttons
            className="decrease"
            id="Decrease"
            text="Decrease"
            handleClick={Decrease}
          />
          <Buttons
            className="reset"
            id="Reset"
            text="Reset"
            handleClick={Reset}
          />
          <Buttons
            className="increase"
            id="Increase"
            text="Increase"
            handleClick={Increase}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
