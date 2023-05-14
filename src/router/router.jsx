import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../Layout";
import About from "../pages/About/About";
import FirstLine from "../pages/FirstLine/FirstLine";
import SecondLine from "../pages/SecondLine/SecondLine";
import ThirdLine from "../pages/ThirdLine/ThirdLine";

export const ROUTES = {
  git_created: "https://github.com/Mykola-Samchuk",
  about: "/",
  first_line: "/first_line",
  second_line: "/second_line",
  third_line: "/third_line",
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
