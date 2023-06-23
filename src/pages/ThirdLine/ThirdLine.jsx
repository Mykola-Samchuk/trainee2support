import React from "react";
import Banner from "../../components/Banner/Banner";
import img from "./img/racoon-checkbox-01.png";

export default function FirstLine() {
  // background for banner
  const bgStyles = {
    bgPurpleBlue: "bgPurpleBlue",
  };
  return (
    <main>
      <Banner title={"Третя лінія"} bgStyle={bgStyles.bgPurpleBlue} />
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
