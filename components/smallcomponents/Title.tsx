import { createElement } from 'react';

interface TitleProps {
  title: string,
  underlineColor: string,
  textColor?: string,
}

export function Title ({ title, underlineColor, textColor }:TitleProps) {

  return (
    <div className="title">
      <h1 style={{ color: textColor }}>{ title }</h1>
      <div className="underline" style={{ background: underlineColor }} />
    </div>
  )
}

interface CapitalisedHeadingProps {
  children: string,
  fontWeight?: string,
  wrapper: string,
}

export function CapitalisedHeading({ children, wrapper, fontWeight }: CapitalisedHeadingProps): JSX.Element {

  return createElement(wrapper,
    { style: { fontWeight: fontWeight }, className: 'capitalised-heading' }, children);
}