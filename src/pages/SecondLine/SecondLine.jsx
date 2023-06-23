import React from "react";
import "./second-line.scss";
import Banner from "../../components/Banner/Banner";
import img from "./img/racoon-checkbox-01.png";

export default function SecondLine() {
  // background for banner
  const bgStyles = {
    bgBlueOrange: "bgBlueOrange",
  };
  return (
    <main>
      <Banner title={"Друга лінія"} bgStyle={bgStyles.bgBlueOrange} />
      <section className="section-content section-content">
        <div className="spacer-xl"></div>
        <div className="content-blc-full">
          <div className="progress-wrapp">
            <div className="content-blc-wrapp">
              <h2 className="content-blc-title">В процесі розробки...</h2>
            </div>
            <div className="img-blc">
              <img src={img} alt="img-raccon" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
