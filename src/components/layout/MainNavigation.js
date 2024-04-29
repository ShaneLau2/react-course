import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/favourite-context";
import React from "react";

function MainNavigation() {
  const favouriteCtx = React.useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="react-course/">All Meetups</Link>
          </li>
          <li>
            <Link to="react-course/favorites">Favorites
            <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
            </Link>
          </li>
          <li>
            <Link to="react-course/new-meetup">New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
