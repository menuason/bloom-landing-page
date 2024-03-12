import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export const ErrorBoundary = () => {
  const { i18n } = useTranslation();
  const error = useRouteError();

  return (
    <div className="flex inset-0 absolute w-fit h-fit m-auto p-2 text-center">
      <div className="flex flex-col gap-6">
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
      </div>
  );
}
