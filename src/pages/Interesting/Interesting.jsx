import React from "react";
import "./interesting.scss";
import Banner from "../../components/Banner/Banner";

export default function Interesting() {
  return (
    <main>
      <Banner title={"Цікаво знати"} text={"Перша лінія"} bgLite={true} />
      <section className="section-content"></section>
    </main>
  );
}
