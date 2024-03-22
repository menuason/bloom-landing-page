import { toast } from "react-toastify";

export const showSuccessNotification = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
