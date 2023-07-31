import React, { useState } from "react";
import "./index.css";
import Navbar from "../../Componet/navBar";
import Navbar2 from "../../Componet/navBar2";
import AvailableBtn from "../../Componet/availableBtn";
import Content from "../../Componet/content";
import ImageContent from "../../Componet/imgContent";
import Foorter from "../../Componet/footer";
function Home() {
  const [navBar, setNavBar] = useState(false);
  return (
    <div className="home">
      <div className="nav">
        <Navbar navBar={navBar} setNavBar={setNavBar} />
      </div>
      <div className="nav2">{navBar && <Navbar2 />}</div>
      <div className="available">
        <AvailableBtn />
      </div>
      <Content/>
      <div>
      <ImageContent/>
      </div>

    </div>
  );
}

export default Home;
