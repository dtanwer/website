import React from "react";
import "./index.css";
function Card1() {
  return (
    <div className="card">
      <div className="card1">
        <div className="txt">
        DOWNLOAD OUR APP ON THESE PLATTFORMS:
        </div>
      <br />
      <div className="btns">
        <button>
            <div className="btnContent">
            <img src="https://uploads-ssl.webflow.com/649c42429cb3e7c0fcd4cfe4/649d3afc738eb73adf7f5334_Android.svg" alt="icon"  />Download
            </div>
        </button>
        <button>
            <div className="btnContent">
            <img src="https://uploads-ssl.webflow.com/649c42429cb3e7c0fcd4cfe4/649d3afc6dbc20d3adeee023_Apple.svg" alt="icon" />Download
            </div>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Card1;
