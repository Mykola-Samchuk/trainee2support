import React from "react";
import "./first-line.scss";
import Banner from "../../components/Banner/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import { ROUTES } from "../../router/ROUTES";

export default function FirstLine() {
  const data = useLoaderData();

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
              <NavLink
                className="list-item-link"
                key={item.id}
                to={ROUTES.lesson(item.id)}
              >
                <h4 className="item-link-name">{item.name}</h4>
                <h5 className="item-link-title">{item.title}</h5>
              </NavLink>
            );
          })}
        </div>
      </section>
      <section className="section-content section-content">
        <div className="spacer-xl"></div>
        <div className="content-blc-full">
          <div className="first-interesting">
            <div className="content-blc-wrapp">
              <h2 className="content-blc-title">Цікаво знати!</h2>
              <p className="h3 content-blc-text">
                Ти не зупиняєшся та хочеш більше інформації? Тоді тобі сюди!!!
              </p>
              <NavLink className="btn color2">Детальніше</NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
