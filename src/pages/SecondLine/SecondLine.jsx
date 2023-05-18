import React from "react";
import Banner from "../../components/Banner/Banner";

export default function SecondLine() {
  // background for banner
  const bgStyles = {
    bgBlueOrange: "bgBlueOrange",
  };
  return (
    <main>
      <Banner title={"Друга лінія лінія"} bgStyle={bgStyles.bgBlueOrange} />
      <section className="section-content">в процесі...</section>
    </main>
  );
}
