import * as React from "react"
import { Nav } from "../data/dataStructure";

interface HeaderProps {
  navList: Nav[]
}

export function Header ({ navList }: HeaderProps) {

  return (
    <header className="main-nav-header">
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
      <label htmlFor="menu-icon" />
      <nav className="nav">
        <ul className="pt-5">{
          navList.map((n, i) => {
            return <li key={ i }><a href={ n.href }>{ n.pageTitle }</a></li>
          })
        }
        </ul>
      </nav>
    </header>
  )
}
