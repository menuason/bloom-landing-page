import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export const ErrorBoundary = () => {
  const { i18n } = useTranslation();
  const error = useRouteError();

  return (
    <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 text-center xs:p-2">
      <p className="text-bloomBlack lg:text-lg md:text-base xs:text-sm">
        {
          isRouteErrorResponse(error) && error.status === 404
            ? "This page doesn't exist! Please navigate to Home Page."
            : "Oops! Something went wrong. Please navigate to Home Page."
        }
      </p>
      <Button
        link={`/home/${i18n.language}`}
        type="outlined"
        className="mx-auto"
      >
        Home Page
      </Button>
    </div>
  );
}
