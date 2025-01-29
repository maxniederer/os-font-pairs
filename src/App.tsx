import { useState, useEffect } from "react";
import { List, Shuffle, Info } from "@phosphor-icons/react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import fonts from "./assets/fonts.json";
import Font from "./components/Font";

import ErrorPage from "./pages/ErrorPage";
import PairPage from "./pages/PairPage";
import SpecimenPage from "./pages/SpecimenPage";
import PairSpecimenPage from "./pages/PairSpecimenPage";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PairPage />, //temp
    errorElement: <ErrorPage />,
  },
  {
    path: "/specimen/:fontId",
    element: <SpecimenPage />,
  },
  {
    path: "/pair/head=:headId",
    element: <PairSpecimenPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
