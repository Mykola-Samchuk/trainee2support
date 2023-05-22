import React, { useState } from "react";
import "./lesson-list.scss"

export default function LessonList({ item, index }) {
  const [complate, setComplate] = useState(false);

//   handler click complate
const handlerComplate = (e)=>{
    e.stopPropagation()
    setComplate(!complate)

}
  return (
    <li className="list-title" key={index} onClick={(e)=>{handlerComplate(e)}}>
      <p>{item}</p>
      <p className={`list-status ${ complate ? 'active': ''}`}></p>
    </li>
  );
}
