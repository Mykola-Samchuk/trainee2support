import React, { useEffect } from "react";
import { createHashRouter, useLocation } from "react-router-dom";
import Layout from "../Layout";
import About from "../pages/About/About";
import FirstLine from "../pages/FirstLine/FirstLine";
import SecondLine from "../pages/SecondLine/SecondLine";
import ThirdLine from "../pages/ThirdLine/ThirdLine";
import { fetchFirstAllLessons } from "../pages/FirstLine/fetchFirstAllLessons";
import Lesson from "../pages/Lesson/Lesson";
import { fetchLessonByIdRouted } from "../pages/Lesson/fetchLessonById";
import { ROUTES } from "./ROUTES";


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export const router = createHashRouter([
  {
    path: ROUTES.about,
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
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
