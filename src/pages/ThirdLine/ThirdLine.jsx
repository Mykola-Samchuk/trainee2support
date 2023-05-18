import React from "react";
import Banner from "../../components/Banner/Banner";

export default function FirstLine() {
  // background for banner
  const bgStyles = {
    bgYelowPurple: "bgYelowPurple",
  };
  return (
    <main>
      <Banner title={"Третя лінія лінія"} bgStyle={bgStyles.bgYelowPurple} />
      <section className="section-content">в процесі...</section>
    </main>
  );
}
