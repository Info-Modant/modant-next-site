import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  href?: string,
  onClick?: () => void,
  children: string,
  leftIcon?: IconDefinition,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
}

export function Button({ href, onClick, children, leftIcon, type, disabled }: ButtonProps) {
  return (
    <a href={ href }>
      <button className="modant-button" onClick={ onClick } type={ type || 'button' } disabled={ disabled }>
        { leftIcon && <FontAwesomeIcon icon={leftIcon} /> }
        <p>{ children }</p>
      </button>
    </a>
  )
}