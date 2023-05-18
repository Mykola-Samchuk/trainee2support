import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./first-line.scss";
import Banner from "../../components/Banner/Banner";

export default function FirstLine() {
  const bgStyles = {
    bgYelowPurple: "bgYelowPurple"
  }
  return (
    <main className="app-wrapp">
      <Banner title={"Перша лінія"} bgStyle={bgStyles.bgYelowPurple}/>
    </main>
  );
}
