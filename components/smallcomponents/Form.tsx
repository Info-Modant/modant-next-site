import {ReactNode, ReactNodeArray} from "react";

interface SubmitContainerProps {
  title: string,
  children: ReactNode | ReactNodeArray,
}

export function SubjectContainer({ title, children }: SubmitContainerProps) {

  return (
    <div className="form-subject-container">
      <h3>{ title }</h3>
      { children }
    </div>
  )
}

interface CheckboxContainerProps {
  label: string,
  children: ReactNode | ReactNodeArray,
}

export function CheckboxContainer({ label, children }: CheckboxContainerProps) {

  return (
    <div className="checkbox-container">
      { children }
      <span>{ label }</span>
    </div>
  )
}