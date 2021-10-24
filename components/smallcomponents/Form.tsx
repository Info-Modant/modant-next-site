import { ReactNode, ReactNodeArray } from "react";

interface FormContainerProps extends ButtonContainerProps {
  title: string,
}

interface SubjectContainerProps extends FormContainerProps {
  inputLength?: number,
  error?: string,
}

export function SubjectContainer({ title, children, inputLength, error }: SubjectContainerProps) {

  return (
    <div className={`form-subject-container ${ inputLength && inputLength > 0 ? 'label-transition' : '' }`}>
      <label>{ title }</label>
      { children }
      { error && <Error error={ error } /> }
    </div>
  )
}

export function CheckBoxFieldContainer({ title, children }: FormContainerProps) {

  return (
    <div className="checkbox-field-container">
      <label>{ title }</label>
      { children }
    </div>
  )
}

interface CheckboxContainerProps extends ButtonContainerProps {
  label: string,
}

export function CheckboxContainer({ label, children }: CheckboxContainerProps) {

  return (
    <div className="checkbox-container">
      { children }
      <span>{ label }</span>
    </div>
  )
}

interface ButtonContainerProps {
  children: ReactNode | ReactNodeArray,
}

export function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className="button-container">{ children }</div>
}

interface ErrorProps {
  error: string,
}

export function Error({ error }: ErrorProps) {
  return <span className="error">{ error }</span>
}