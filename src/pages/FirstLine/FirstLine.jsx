import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./first-line.scss";

export default function FirstLine() {
  return (
    <main className="content">
      <section className="section-content section-content">
        <div className="first-wrapp">
          <SideBar></SideBar>
          <div className="side-content"></div>
        </div>
      </section>
    </main>
  );
}
