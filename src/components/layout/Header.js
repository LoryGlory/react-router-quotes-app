import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {Fragment} from "react";

const Header = () => {
  return (
      <Fragment>
        <header className={classes.header}>
          <NavLink to="/welcome"><span className={classes.logo}>Great Quotes</span></NavLink>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink to="/all-quotes" activeClassName={classes.active}>All Quotes</NavLink>
              </li>
              <li>
                <NavLink to="/add-a-quote" activeClassName={classes.active}>Add a Quote</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
  )
};

export default Header;