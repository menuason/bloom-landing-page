import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import PackagingPage from "./pages/PackagingPage/PackagingPage";
import CataloguePage from "./pages/Catalogue/CataloguePage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import OurSystemPage from "./pages/OurSystemPage/OurSystemPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MissionAndVisionPage from "./pages/MissionAndVisionPage/MissionAndVisionPage";
import { RootComponent } from "./components/RootComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,

      children: [
        {
          path: "/home/:lang",
          element: <HomePage />,
        },
        {
          path: "/packaging/:lang",
          element: <PackagingPage />,
        },
        {
          path: "/catalogue/:lang",
          element: <CataloguePage />,
        },
        {
          path: "/contact-us/:lang",
          element: <ContactUsPage />,
        },
        {
          path: "/our-system/:lang",
          element: <OurSystemPage />,
        },
        {
          path: "/about-us/:lang",
          element: <AboutUsPage />,
        },
        {
          path: "/mission-and-vision/:lang",
          element: <MissionAndVisionPage />,
        },
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
