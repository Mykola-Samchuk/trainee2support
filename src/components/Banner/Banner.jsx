import React from "react";
import "./banner.scss";

export default function Banner({ title, text, bgStyle, bgLite }) {
  // title - Title page
  // text - short text
  // bgStyle - background style color for general pages
  // bgLite - true / false - banner type2 for another pages banner
  
  return (
    <section
      className={
        bgStyle
          ? `banner-wrapp ${bgStyle}`
          : bgLite
          ? `banner-wrapp bglite`
          : `banner-wrapp`
      }
    >
      <h1 className={bgLite ? "banner-title h2" : "banner-title"}>{title}</h1>
      <p className="banner-text">{text}</p>
    </section>
  );
}
