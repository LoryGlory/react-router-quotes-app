import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {Fragment} from "react";

const MainNavigation = () => {
  return (
      <header className={classes.header}>
        <NavLink to="/quotes">
          <div className={classes.logo}>Great Quotes</div>
        </NavLink>
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

export default MainNavigation;