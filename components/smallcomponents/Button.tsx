import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  href?: string,
  onClick?: () => void,
  children: string,
  leftIcon?: IconDefinition,
}

export function Button({ href, onClick, children, leftIcon }: ButtonProps) {
  return (
    <a href={ href }>
      <button className="modant-button" onClick={ onClick }>
        { leftIcon && <FontAwesomeIcon icon={leftIcon} /> }
        <p>{ children }</p>
      </button>
    </a>
  )
}