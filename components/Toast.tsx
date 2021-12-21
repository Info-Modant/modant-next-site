import React, {useContext, useEffect} from "react";
import ToastContext, {Toast, ToastType} from "../contexts/toastContext";
import {Color} from "../utilities/color";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import { faExclamationCircle, faCheckCircle, faBell, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "./smallcomponents/Button";

export function ToastContainer() {
  const { toastList, removeToastFromList } = useContext(ToastContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if(toastList.length > 0) {
        removeToastFromList(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }

  }, [toastList, removeToastFromList]);

  return (
    <div className="toast-container toast-bottom-right">
      {
        toastList.map(toast => {

            return <ToastBox toast={ toast }
                             removeToastCallback={ () => {
                               removeToastFromList(toast.id);
                             } }
                             key={ toast.id }/>;
          },
        )
      }
    </div>
  )
}

interface ToastBoxProps {
  toast: Toast,
  removeToastCallback: () => void,
}

function ToastBox({ toast, removeToastCallback }: ToastBoxProps) {

  let toastIcon: IconDefinition;
  let accentColor: Color;

  switch(toast.type) {
    case ToastType.Error:
      toastIcon = faCheckCircle;
      accentColor = Color.White;
      break;
    case ToastType.Notification:
      toastIcon = faBell;
      accentColor = Color.Black;
      break;
    case ToastType.Success:
    default:
      toastIcon = faExclamationCircle;
      accentColor = Color.White;
      break;
  }

  return (
    <div className={`toast ${ toast.type } toast-bottom-right`}>
      <Button className="cancel-btn" leftIcon={ faTimesCircle } onClick={ removeToastCallback } />
      <div className="toast-content" onClick={ toast?.onClick }>
        <div className="toast-image">
          <FontAwesomeIcon icon={ toastIcon } />
        </div>
        <div>
          <h6 className="toast-title" style={ { color: accentColor } }>{ toast.title }</h6>
          <p className="toast-message" style={ { color: accentColor } }>{ toast.description }</p>
        </div>
      </div>
    </div>
  )
}