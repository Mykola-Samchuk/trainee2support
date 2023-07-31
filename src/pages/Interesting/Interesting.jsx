import React from "react";
import "./interesting.scss";
import Banner from "../../components/Banner/Banner";
import img from "./img/racoon-checkbox-01.png";

export default function Interesting() {
  return (
    <main>
      <Banner title={"Цікаво знати"} text={"Перша лінія"} bgLite={true} />
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
      {/* <section className="section-content">
        <div className="interesting-wrapp">
          <div className="interesting-img-blc">
            <img src="imgtest.jpg" alt="img" />
          </div>
          <div className="interesting-title"></div>
          <div className="interesting-option"></div>
        </div>
      </section> */}
    </main>
  );
}
