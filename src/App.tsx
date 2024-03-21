import React, { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useTranslation } from "react-i18next";
import { RootComponent } from "./components/RootComponent";
// import { BarLoader } from "react-spinners";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const PackagingPage = React.lazy(() => import("./pages/PackagingPage/PackagingPage"));
const CataloguePage = React.lazy(() => import("./pages/Catalogue/CataloguePage"));
const ContactUsPage = React.lazy(() => import("./pages/ContactUsPage/ContactUsPage"));
const OurSystemPage = React.lazy(() => import("./pages/OurSystemPage/OurSystemPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const MissionAndVisionPage = React.lazy(() => import("./pages/MissionAndVisionPage/MissionAndVisionPage"));

function App() {
  const { i18n } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Navigate to={`/home/${i18n.language}`} replace />,
        },
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <img
            src="../../catalogue-page-photos/catalogue-flowers/Mandala.png"
            alt="Bloom House"
            className={`w-64 h-64 ${isLoading ? "animate-spin" : ""}`}
          />
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
