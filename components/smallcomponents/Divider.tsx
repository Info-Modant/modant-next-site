import React from 'react';

interface DividerProps {
  margin?: string,
  background?: string,
  width?: string,
  maxWidth?: string,
  height?: string,
}

interface DividerDotProps {
  size?: string,
  margin?: string,
  background?: string,
}

export const Divider = ({ margin, background, maxWidth, width, height }: DividerProps) =>
  <div className="divider" style={{ margin: margin, background: background, width: width, maxWidth: maxWidth, height: height }} />

export const DividerDot = ({ margin, background, size }: DividerDotProps) =>
  <div className="divider-dot-container">
    <div className="divider-dot" style={{ margin: margin, background: background, width: size, height: size }} />
  </div>
