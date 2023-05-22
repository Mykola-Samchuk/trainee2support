import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./lesson.scss";

export default function Lesson() {
  const lesson = useLoaderData();

  console.log(lesson);

  return (
    <>
      <main>
        <section className=" banner-lesson">
          <div className="lesson-wrapp">
            <h1 className="lesson-title h2">{lesson.title}</h1>
            <p>{lesson.name}</p>
          </div>
        </section>
        <section className="section-content">
          <div className="lesson-question-wrapp">
            <h2>Питання</h2>

            <ul className="lesson-question-list">
              {lesson.question.map((item, index) => {
                return (
                  <li className="question-title" key={index}>
                    <p>{item}</p>
                    <p className="question-status"></p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        {lesson.practical ? (
          <section className="section-content">
            <div className="lesson-question-wrapp">
              <h2>Практичне завдання</h2>

              <ul className="lesson-question-list">
                {lesson.practical.map((item, index) => {
                  return (
                    <li className="question-title" key={index}>
                      <p>{item}</p>
                      <p className="question-status"></p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="section-content">

        </section>
      </main>
    </>
  );
}
