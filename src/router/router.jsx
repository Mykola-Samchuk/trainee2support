import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../Layout";
import About from "../pages/About/About";
import FirstLine from "../pages/FirstLine/FirstLine";
import SecondLine from "../pages/SecondLine/SecondLine";
import ThirdLine from "../pages/ThirdLine/ThirdLine";
import { fetchFirstAllLessons } from "../pages/FirstLine/fetchFirstAllLessons";
import Lesson from "../pages/Lesson/Lesson";
import { fetchLessonByIdRouted } from "../pages/Lesson/fetchLessonById";

export const ROUTES = {
  git_created: "https://github.com/Mykola-Samchuk",
  about: "/",
  first_line: "/first_line",
  second_line: "/second_line",
  third_line: "/third_line",
  lesson: (id = null) => (id ? `/first_line/${id}` : "/first_line/:lessonId"),
};

export const router = createHashRouter([
  {
    path: ROUTES.about,
    element: <Layout />,
    children: [
      {
        element: <About />,
        index: true,
      },
      {
        path: ROUTES.first_line,
        element: <FirstLine />,
        loader: fetchFirstAllLessons,
      },
      {
        path: ROUTES.lesson(),
        element: <Lesson />,
        loader: fetchLessonByIdRouted,
      },
      {
        path: ROUTES.second_line,
        element: <SecondLine />,
      },
      {
        path: ROUTES.third_line,
        element: <ThirdLine />,
      },
    ],
  },
]);
