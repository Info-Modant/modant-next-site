import { createContext } from 'react';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Notification = 'notification',
}

export interface Toast {
  id: number,
  title: string,
  description: string,
  type: ToastType,
  onClick?: () => void,
  added?: boolean,
}

export interface ToastState {
  toastList: Toast[],
  addToastToList: (toast: Toast) => void,
  removeToastFromList: (toastId: number) => void,
}

export const defaultToastState: ToastState = {
  toastList: [],
  addToastToList: () => {
  },
  removeToastFromList: () => {
  },
}

const ToastContext = createContext<ToastState>(defaultToastState);

export default ToastContext;