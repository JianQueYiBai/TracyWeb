import { useState } from "react";
import logo from "./assets/logo.png";
import bgVideo from "./assets/bg.mp4";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="rootInnerWrapper">
      <div className="pHeader flexBetween">
        <div className="flexBetween">
          <div className="logo2">
            <img width="100%" src={logo} alt="" />
          </div>
          <div className="pt1">TracyAI</div>
          <div className="pt2">Terminal</div>
          <div className="pt2">Token</div>
          <div className="pt2">Virtual4</div>
        </div>
        <div className="flexBetween">
          <div className="pbtn1">Buy $TRACY</div>
          <div className="pbtn2">
            <div className="pt3">$TRACY</div>
            <div className="pt4">0X5u33a...6j58gn</div>
            <div className="pt5">icon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
