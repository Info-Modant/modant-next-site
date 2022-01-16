import React from 'react';
import {FooterInfo} from "../data/dataStructure";

const footer = require('../data/footer.json') as FooterInfo;

export function Footer() {

  return (
    <div className="footer section">
      <section>
        <h4>{ footer.title }<span>{ footer.subtitle }</span></h4>
        <p>{ footer.copyright }</p>
      </section>
      <section>
        <a href={ `mailto:${ footer.email }` }>{ footer.email }</a>
      </section>
    </div>
  )
}