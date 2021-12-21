import React, { ReactNode, ReactNodeArray } from 'react';
import { Header } from "./Header";
import { Helmet } from 'react-helmet';
import {Nav, SiteInfo} from "../data/dataStructure";
import {Footer} from "./Footer";
import {ToastContainer} from "./Toast";

const navList = require('../data/nav.json') as Nav[];
const siteInfo = require('../data/siteInfo.json') as SiteInfo;

export function ModantHelmet() {

  return (
    <Helmet>
      <title>{ siteInfo.siteTitle }</title>
      <meta name="description" content={ siteInfo.description } />
    </Helmet>
  )
}

interface LayoutProps {
  children: ReactNode | ReactNodeArray,
  className?: string,
}

export function Layout ({ children, className }: LayoutProps) {

  return (
    <>
      <ModantHelmet />
      <Header navList={ navList } />
      <div className={`layout ${ className }`}>
        <main>{children}</main>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}
