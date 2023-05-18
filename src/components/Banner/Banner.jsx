import React from "react";
import "./banner.scss";

export default function Banner({ title, text, bgStyle }) {
  return (
    <section
      className={
        bgStyle ? `banner-wrapp ${bgStyle}` : `banner-wrapp`
      }
    >
      <h1 className="banner-title">{title}</h1>
      <p className="banner-text">{text}</p>
    </section>
  );
}
