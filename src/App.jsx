import { useState } from "react";
import logo from "./assets/logo.png";
import bgVideo from "./assets/bg.mp4";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const copy = () => {
    navigator.clipboard.writeText('C1nzFL2DD3Wqc3dzRbsrpb6tiZ6dbYsXubjVtzyHvirt');
    alert('Copy successfully.')
  }
 
  return (
    <div className="rootInnerWrapper">
      <video autoPlay muted loop className="video-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="homeContent">
        <div className="flexCenter">
          <div className="logo">
            <img width="100%" src={logo} alt="" />
          </div>
          <div className="ht1">TracyAI</div>
        </div>
        <div className="ht2">
          Revolutionizing Sports Broadcasting and Analytics
        </div>
        <div className="ht3">
          Using advanced AI technology combined with deep basketball expertise,
          we deliver real-time analysis, predictive insights, and an
          unparalleled fan experience.
        </div>

        <div className="ht4">Solan Contract Address</div>
        <div className="flexBetween hb1">
          <div className="hbtn2">CA:</div>
          <div className="ht5">
            C1nzFL2DD3Wqc3dzRbsrpb6tiZ6dbYsXubjVtzyHvirt
          </div>
          <div className="hbtn3" onClick={copy}>Copy Address</div>
        </div>

        {/* <div className="hBtn">Launch App</div> */}
      </div>
    </div>
  );
}

export default App;
