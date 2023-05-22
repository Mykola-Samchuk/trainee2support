import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./lesson.scss";
import LessonList from "../../components/LessonList/LessonList";

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
          <div className="lesson-wrapp">
            <h2>Питання</h2>

            <ul className="lesson-list">
              {lesson.question.map((item, index) => {
                return <LessonList item={item} key={index} />;
              })}
            </ul>
          </div>
        </section>
        {lesson.practical ? (
          <section className="section-content">
            <div className="spacer-xl"></div>
            <div className="lesson-wrapp">
              <h2>Практичне завдання</h2>

              <ul className="lesson-list">
                {lesson.practical.map((item, index) => {
                  return <LessonList item={item} key={index} />;
                })}
              </ul>
            </div>
          </section>
        ) : (
          ""
        )}
        {lesson.checkQuestion ? (
          <section className="section-content">
            <div className="spacer-xl"></div>
            <div className="lesson-wrapp">
              <h2>Підсумкові питання</h2>

              <ul className="lesson-list">
                {lesson.checkQuestion.map((item, index) => {
                  return <LessonList item={item} key={index} />;
                })}
              </ul>
            </div>
          </section>
        ) : (
          ""
        )}
        <section className="section-content">
          <div className="spacer-xl"></div>
          <div className="lesson-wrapp">
            <h2>Корисні посилання</h2>

            <div className="lesson-links">
              {lesson.links.map((item, index) => {
                return (
                  <Link className="lesson-link" key={index} to={item}>
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
