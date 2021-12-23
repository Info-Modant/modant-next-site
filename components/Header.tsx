import * as React from "react"
import { Nav } from "../data/dataStructure";
import {ReactNode, ReactNodeArray} from "react";
import { Link } from 'react-scroll';
import {useRouter} from "next/router";

interface HeaderProps {
  navList: Nav[]
}

export function Header ({ navList }: HeaderProps) {

  const router = useRouter();

  return (
    <header className="main-nav-header">
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
      <label htmlFor="menu-icon" />
      <nav className="nav">
        <ul className="pt-5">{
          navList.map((n, i) => {
            return (
              <List isLastItem={ i + 1 == navList.length } key={ i }>

                <a onClick={ () => router.push({
                  pathname: n.href,
                  query: {
                    smoothScroll: n.to
                  }
                }) }>
                  { n.pageTitle }
                </a>
              </List>
            )
          })
        }
        </ul>
      </nav>
    </header>
  )
}

interface ListProps {
  children: ReactNode | ReactNodeArray,
  isLastItem?: boolean,
}

function List({ children, isLastItem }: ListProps) {

  return (
    <>
      <li>{ children }</li>
      { !isLastItem && <div className="nav-divider" /> }
    </>
  )
}
