import '../styles/style.scss';
import type { AppProps } from 'next/app';
import useToastContextState from "../contexts/toastContextState";
import ToastContext from '../contexts/toastContext';

export default function ModantNextSite({ Component, pageProps }: AppProps) {

  const toastState = useToastContextState();

  return (
    <ToastContext.Provider value={ toastState }>
      <Component {...pageProps} />
    </ToastContext.Provider>
  )
}
