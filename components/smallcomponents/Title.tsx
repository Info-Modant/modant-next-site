import React from 'react';

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