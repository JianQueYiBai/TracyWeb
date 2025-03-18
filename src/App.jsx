import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";

import bgVideo from "./assets/bg.mp4";
import mainVideo from "./assets/get.mp4";

import copyLogo from "./assets/copy.png";

import te from "./assets/te.png";
import tw from "./assets/tw.png";
import di from "./assets/di.png";
import read from "./assets/read.png";
import read2 from "./assets/read2.png";
import dd from "./assets/dd.png";
import play from "./assets/play.png";
import pause from "./assets/pause.png";

import hbg1 from "./assets/hbg1.png";
import hbg2 from "./assets/hbg2.png";
import hbg3 from "./assets/hbg3.png";
import hbg4 from "./assets/hbg4.png";
import ha1 from "./assets/ha1.png";
import ha2 from "./assets/ha2.png";
import ha3 from "./assets/ha3.png";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";
import a6 from "./assets/a6.png";
import a7 from "./assets/a7.png";

import re1 from "./assets/re1.png";
import re2 from "./assets/re2.png";

import ReactPlayer from "react-player";

import { Dropdown, Button, Space } from "antd";
import { useRef, useState } from "react";

function App() {
  const copy = () => {
    navigator.clipboard.writeText(
      "C1nzFL2DD3Wqc3dzRbsrpb6tiZ6dbYsXubjVtzyHvirt"
    );
    alert("Copy successfully.");
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toLink = () => {
    window.open(
      "https://medium.com/@TracyAI/introducing-tracyai-the-future-of-sports-commentary-analytics-6578e8d72359"
    );
  };

  const toSocial = (value) => {
    window.open(value);
  };

  const items = [
    {
      label: (
        <div className="hLink3" onClick={toLink}>
          <img width="20" src={read} style={{ marginRight: "12px" }} alt="" />
          Read the Whitepaper
        </div>
      ),
      key: "1",
      // icon: <UserOutlined />,
    },
    {
      label: (
        <div className="hLink3" onClick={copy}>
          <img
            width="28"
            src={copyLogo}
            style={{ marginRight: "12px" }}
            alt=""
          />
          TRACY Contract Address
        </div>
      ),
      key: "1",
      // icon: <UserOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const playVideo = () => {};

  return (
    <div className="rootInnerWrapper">
      <video autoPlay muted loop className="video-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pHeader flexBetween">
        <div className="logoHome">
          <img height={"100%"} src={logo2} alt="" />
        </div>
        <Dropdown menu={menuProps} trigger={["click"]}>
          <div className="moreBtn flexCenter">
            More
            <img width="12" src={dd} style={{ marginLeft: "8px" }} alt="" />
          </div>
        </Dropdown>
      </div>

      <div className="homeContent">
        {/* <div className="flexCenter">
          <div className="logo">
            <img width="100%" src={logo} alt="" />
          </div>
          <div className="ht1">TracyAI</div>
        </div> */}
        <div className="ht2">
          Revolutionizing Sports Broadcasting and Analytics
        </div>
        <div className="ht3">
          Using advanced AI technology combined with deep basketball expertise,
          we deliver real-time analysis, predictive insights, and an
          unparalleled fan experience.
        </div>

        {/* <div className="hLink" onClick={toLink}>
          <img width="20" src={read} style={{ marginRight: "12px" }} alt="" />
          Read the Whitepaper
        </div> */}

        <div className="videoBox">
          <div
            className={`actionBtn ${isPlaying ? "pauseBtn" : "playBtn"}`}
            onClick={togglePlay}
          >
            <img src={isPlaying ? pause : play} alt="" />
          </div>
          <video
            ref={videoRef}
            className="mainVieo"
            onEnded={() => {
              setIsPlaying(false);
            }}
          >
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{ margin: "36px auto" }}>
          <div className="ht10">
            Get early access to the alpha testing phase and be the first to test
            out TracyAI's revolutionary products. Join the waitlist to get
            notified as soon as we're launching.
          </div>

            <div className="links flexCenter">
              <div
                className="hLink2"
                onClick={() => toSocial("https://tally.so/r/wQO7Ap")}
              >
                <img
                  width="20"
                  src={read2}
                  style={{ marginRight: "12px" }}
                  alt=""
                />
                Join The Waitlist
              </div>
              <div
                className="ficonBorder flexCenter"
                onClick={() => toSocial("https://x.com/HeyTracyAI")}
              >
                <img src={te} width={24} alt="" />{" "}
              </div>
              <div
                className="ficonBorder flexCenter"
                style={{margin:'0 12px'}}
                onClick={() => toSocial("https://t.me/HeyTracyAI")}
              >
                <img src={tw} width={24} alt="" />
              </div>
              <div
                className="ficonBorder flexCenter"
                onClick={() => toSocial("https://discord.gg/tracyai")}
              >
                <img src={di} width={24} alt="" />
              </div>
            </div>
        </div>

        <br />

        <div className="ht4">Built for Professionals and Fans alike</div>
        <div className="ht3">Industry-leading analytics at your fingertips</div>
        <div className="flexBetween flexWrap">
          <div className="hb1">
            <div className="hb1img">
              <img width={"100%"} src={hbg1} alt="" />
            </div>
            <div className="flexStartCenter">
              <img width={24} src={ha1} alt="" />
              <div className="ht14">TMZ Sports</div>
            </div>
            <div className="ht11">
              My Initials Are TT, But You Can Call Me A.I. ... New Role in Tech
              Company
            </div>
            <div className="ht12">
              Tristan Thompson's bouncing back from his recent on-court scuffle
              with the Toronto Raptors ... announcing he's looking to the future
              off the hardwood -- with a new ro...
            </div>
            <div
              className="ht13"
              onClick={() => toSocial("https://bit.ly/3QuvFco")}
            >
              Read More...
            </div>
          </div>

          <div className="hb1">
            <div className="hb1img">
              <img width={"100%"} src={hbg2} alt="" />
            </div>
            <div className="flexStartCenter">
              <img width={24} src={ha2} alt="" />
              <div className="ht14">complex</div>
            </div>
            <div className="ht11">
              Tristan Thompson Launches TracyAI During New York Stock Exchange
              Opening Bell Visit
            </div>
            <div className="ht12">
              Tristan Thompson shut down the New York Stock Exchange with the
              launch of his TracyAI platform following NBA All-Star Weekend.
            </div>
            <div
              className="ht13"
              onClick={() => toSocial("https://t.co/UrcfF9IT6n")}
            >
              Read More...
            </div>
          </div>

          <div className="hb1">
            <div className="hb1img">
              <img width={"100%"} src={hbg3} alt="" />
            </div>
            <div className="flexStartCenter">
              <img width={24} src={ha3} alt="" />
              <div className="ht14">sport sbusiness journal</div>
            </div>
            <div className="ht11">
              NBA veteran Tristan Thompson launching new AI basketball agent
              called TracyAI
            </div>
            <div className="ht12">
              The 13-year NBAer is behind the launch of an AI agent developed to
              deepen fans' understanding of basketball analytics.
            </div>
            <div
              className="ht13"
              onClick={() => toSocial("https://t.co/6HY5NPGn2F")}
            >
              Read More...
            </div>
          </div>
        </div>

        <div className="ht4">What people are thinking about TracyAI</div>
        <div className="ht3">
          Media is buzzing all around the world. Check out some latest tweets talking about us
        </div>

        <div
          className="flexBetweenStart flexWrap"
          style={{ marginTop: "24px" }}
        >
          <div className="hb2">
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a1} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">
                    Khloé{" "}
                    <img
                      width={16}
                      src={re1}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                  <div className="ht16">@khloekardashian</div>
                </div>
              </div>
              <div className="ht17">
                Love what’s being created here <span>@HeyTracyAI</span>,
                Congrats!!! 🍾
              </div>
              <div className="hb3">
                <div className="flexStartCenter">
                  <img className="hb3img" width={24} src={a6} alt="" />
                  <div className="ht15-1 flexStartCenter">
                    Virtuals Protocol{" "}
                    <img
                      className="aimg"
                      width={16}
                      src={re2}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                </div>
                <div className="ht19">
                  What many have been waiting for… The global debut of TracyAI
                  at NBA All-Star Weekend! Catch all the action and insights
                  from this game-changing event.
                </div>
              </div>
              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/khloekardashian/status/1891552900070908130?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a2} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">
                    everythingempt
                    <img
                      width={16}
                      src={re1}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                  <div className="ht16">@everythingempt0 </div>
                </div>
              </div>
              <div className="ht17">
                sports: 2.3trillion industry. we coming
              </div>
              <div className="hb3">
                <div className="flexStartCenter">
                  <img className="hb3img" width={24} src={a6} alt="" />
                  <div className="ht15-1 flexStartCenter">
                    Virtuals Protocol{" "}
                    <img
                      width={16}
                      src={re2}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                </div>
                <div className="ht19">
                  Meet TracyAI, specializing in sports commentary and analytics.
                  Backed by an NBA Champion and leveraging an established
                  network, TracyAI delivers professional-level insights to the
                  public.
                </div>
              </div>
              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/everythingempt0/status/1889581572593967152?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
          </div>
          <div className="hb2">
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a3} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">
                    Cleveland Cavaliers{" "}
                    <img
                      width={16}
                      src={re2}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                  <div className="ht16">@cavs</div>
                </div>
              </div>
              <div className="ht17">
                <span>@RealTristan13</span> hosted a panel moderated by{" "}
                <span>@malika_andrews</span> and joined by{" "}
                <span>@dariusgarland22</span> to chat about{" "}
                <span>@HeyTracyAI</span>, an NBA analytics and commentary
                platform.
              </div>
              <div className="hb4">
                <img width={"100%"} src={hbg4} alt="" />
              </div>
              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/cavs/status/1890575473761001916?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a4} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">Darius Garland</div>
                  <div className="ht16">@dariusgarland22 </div>
                </div>
              </div>
              <div className="ht17">Can’t wait to meet Friday 🔥</div>
              <div className="hb3">
                <div className="flexStartCenter">
                  <img className="hb3img" width={24} src={a7} alt="" />
                  <div className="ht15-1 flexStartCenter">
                    HeyTracyAI{" "}
                    <img
                      width={16}
                      src={re2}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                </div>
                <div className="ht19">
                  Introducing TracyAI, the Future of Sports Commentary and
                  Analytics
                  <br />
                  <br />
                  {">"} Pro-level Commentary & Analytics, Built for the
                </div>
              </div>
              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/dariusgarland22/status/1889714853578744162?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
          </div>
          <div className="hb2">
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a5} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">
                    NYSE{" "}
                    <img
                      width={16}
                      src={re1}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                  <div className="ht16">@NYSE</div>
                </div>
              </div>
              <div className="ht17">
                LIVE on NYSE TV Top tech conversations with Tristan Thompson of{" "}
                <span>@HeyTracyAI</span>, <span>@DeanCarignan </span>
                of <span>@Microsoft AI</span>, and the launch of{" "}
                <span>#FiverrGo</span> as <span>@Fiverr</span> rings the opening
                bell!
                <br />
                <br />
                <span>@RealTristan13 $FVRR</span>
              </div>

              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/nyse/status/1892212291409469920?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
            <div className="hb2-inner">
              <div className="flexStartCenter">
                <img className="hb2img" width={40} src={a3} alt="" />
                <div>
                  <div className="ht15 flexStartCenter">
                    Cleveland Cavaliers
                    <img
                      width={16}
                      src={re1}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                  <div className="ht16">@cavs</div>
                </div>
              </div>
              <div className="ht17">
                Hey <span>@RealTristan13</span>! See you at{" "}
                <span>@NBAAllStar</span> Weekend to chat through AI.
              </div>
              <div className="hb3">
                <div className="flexStartCenter">
                  <img className="hb3img" width={24} src={a7} alt="" />
                  <div className="ht15-1 flexStartCenter">
                    HeyTracyAI{" "}
                    <img
                      width={16}
                      src={re2}
                      alt=""
                      style={{ marginLeft: "4px" }}
                    />
                  </div>
                </div>
                <div className="ht19">
                  Introducing TracyAI, the Future of Sports Commentary and
                  Analytics
                  <br />
                  <br />
                  {">"} Pro-level Commentary & Analytics, Built for the
                </div>
              </div>
              <div
                className="ht18"
                onClick={() =>
                  toSocial(
                    "https://x.com/cavs/status/1890085839457427839?s=46&t=oP-JJHId1ZeaK9IIQvjV5w"
                  )
                }
              >
                See on X →
              </div>
            </div>
          </div>
        </div>

        <div className="hfooter flexBetween">
          <span className="copyright copyrightMobile">
            Copyright © 2025 TracyAI
          </span>
          <div className="logoHome flexStartCenter flexWrap">
            <img
              height={"100%"}
              src={logo2}
              style={{ marginRight: "16px" }}
              alt=""
            />
            <span className="copyright copyrightPC ">
              Copyright © 2025 TracyAI
            </span>
          </div>
          <div className="flexBetween">
            <div
              className="ficon"
              onClick={() => toSocial("https://x.com/HeyTracyAI")}
            >
              <img src={te} width={24} alt="" />{" "}
            </div>
            <div
              className="ficon ficon2"
              onClick={() => toSocial("https://t.me/HeyTracyAI")}
            >
              <img src={tw} width={24} alt="" />
            </div>
            <div
              className="ficon"
              onClick={() => toSocial("https://discord.gg/tracyai")}
            >
              <img src={di} width={24} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="hBtn">Launch App</div> */}
      </div>
    </div>
  );
}

export default App;
