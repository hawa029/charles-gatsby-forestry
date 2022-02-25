import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'Contact' &&
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
              to={
                props.page === 'Galleries'
                  ? "/"
                  : "/Galleries"
              }
              activeClassName={headerStyles.navItem}
            >
           
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link
              to={
                props.page === 'Tarifs et prestations'
                  ? "/"
                  : "/Tarifs et prestations"
              }
              activeClassName={headerStyles.navItem}
            >
            
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link
              to={
                props.page === 'Contact'
                  ? "/"
                  : "/Contact"
              }
              activeClassName={headerStyles.navItemActive}
            >
            
            </Link>
          </h1>
        </div>
        
       
      </nav>
    </header>
  )
}