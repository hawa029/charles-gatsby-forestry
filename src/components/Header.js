import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === "contact" &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link
              to={props.page === "galleries" ? "/" : "/galleries"}
              activeClassName={headerStyles.navItem}
            ></Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link
              to={
                props.page === "tarifs et prestations"
                  ? "/"
                  : "/tarifs et prestations"
              }
              activeClassName={headerStyles.navItem}
            ></Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link
              to={props.page === "contact" ? "/" : "/contact"}
              activeClassName={headerStyles.navItemActive}
            ></Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}
