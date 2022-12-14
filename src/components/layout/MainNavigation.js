import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {Fragment} from "react";

const Header = () => {
  return (
      <header className={classes.header}>
        <NavLink to="/quotes"><span className={classes.logo}>Great Quotes</span></NavLink>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>All Quotes</NavLink>
            </li>
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>Add a Quote</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
};

export default Header;