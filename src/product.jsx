import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import bgVideo from "./assets/bg.mp4";


function App() {
  const [activeTab, setActiveTab] = useState(2);

  const changeTab = (value) => {
    setActiveTab(value);
  };


  const handleIframeLoad = (e) => {
    console.log('e: ', e);
    // setLoading(false);
    // setError(false);
    console.log('difyChatbotConfig: ', window.difyChatbotConfig);
    console.log('Iframe loaded successfully');

    var iframe = document.getElementById("myIframe");
    var iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
      console.log('iframeDocument: ', iframeDocument);

    // 创建 style 元素
    var style = document.createElement("style");
    style.textContent = `
      .overflow-y-auto {
          background: #251c1b;
      }
    `;

    // 将 style 元素添加到 iframe 的 head 中
    iframeDocument.head.appendChild(style);
  };

  useEffect(() => {


  }, []);

  return (
    <div className="rootInnerWrapper">
      <div className="pHeader flexBetween">
        <div className="flexBetween">
          <div className="logo2">
            <img width="100%" src={logo} alt="" />
          </div>
          <div
            className={activeTab === 1 ? "pt1" : "pt2"}
            onClick={() => {
              changeTab(1);
            }}
          >
            TracyAI
          </div>
          <div
            className={activeTab === 2 ? "pt1" : "pt2"}
            onClick={() => {
              changeTab(2);
            }}
          >
            Terminal
          </div>
          <div
            className={activeTab === 3 ? "pt1" : "pt2"}
            onClick={() => {
              changeTab(3);
            }}
          >
            Token
          </div>
          <div
            className={activeTab === 4 ? "pt1" : "pt2"}
            onClick={() => {
              changeTab(4);
            }}
          >
            Virtual4
          </div>
        </div>
        <div className="flexBetween">
          <div className="pbtn1">Buy $TRACY</div>
          <div className="pbtn2">
            <div className="pt3">$TRACY</div>
            <div className="pt4">0X5u33a...6j58gn</div>
            <div className="pt5">icon</div>
          </div>

          <div className="pt6">0xm53...2mnd9</div>
        </div>
      </div>
      <iframe
        src="https://chat-nu-opal-19.vercel.app"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "700px",
          background: "#000",
          zIndex:-1
        }}
        frameBorder={0}
        allow="microphone"
        id="myIframe"
        onLoad={handleIframeLoad}
      >

      </iframe>
    </div>
  );
}

export default App;
