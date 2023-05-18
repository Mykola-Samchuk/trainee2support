import React from "react";
import "./first-line.scss";
import Banner from "../../components/Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";

export default function FirstLine() {
  const data = useLoaderData();
  console.log(data);

  // background for banner
  const bgStyles = {
    bgYelowPurple: "bgYelowPurple",
  };

  return (
    <main>
      <Banner title={"Перша лінія"} bgStyle={bgStyles.bgYelowPurple} />
      <section className="section-content">
        <div className="spacer-xl"></div>
        <h2 className="intro-title">
          Модулі для опрацювання та підготовки першої лінії.
        </h2>
        <div className="first-line-list">
          {data.map((item) => {
            return (
                <NavLink className="list-item-link">
                  <h4 className="item-link-name">{item.name}</h4>
                  <h5 className="item-link-title">{item.title}</h5>
                  </NavLink>
            );
          })}
        </div>
        {/* <div className="spacer-xl"></div>
        <div className="first-wrapp">
          <h2 className="intro-title">
            Модулі для опрацювання та підготовки першої лінії.
          </h2>
          <ul className="first-line-list">
            {data.map((item) => {
              return (
                <li className="first-list-item" key={item.id}>
                  <NavLink className="list-item-link">{item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div> */}
      </section>
    </main>
  );
}
