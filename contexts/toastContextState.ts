import { useEffect, useState } from "react";
import { ToastState, defaultToastState, Toast } from "./toastContext";

export default function useToastContextState(): ToastState {
  const [toastState, setToastState] = useState<ToastState>(defaultToastState);

  useEffect(() => {
    setToastState(ts => ({
      ...ts,
      addToastToList: (newToast) => {
        setToastState(({ toastList, ...ts }) => {

          return { ...ts, toastList: [...toastList, newToast] }
        })
      },
      removeToastFromList: (toastId) => {
        setToastState(({ toastList, ...ts }) => {
          const toasts = toastList.slice();

          return { ...ts, toastList: removeToast(toasts, toastId) };
        })
      },
    }));
  }, []);

  return toastState;
}

function removeToast(toastList: Toast[], toastId: number): Toast[] {
  const toasts = toastList.slice();

  const index = toasts.findIndex(t => t.id === toastId);
  toasts.splice(index, 1);

  return toasts;
}