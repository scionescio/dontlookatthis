import React from "react";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import styles from "./styles";

const Header = ({ classes }) => (
  <div className={classes.backgroundHeader}>
    <div className={classes.outerWrapper}>
      <Link to="/" className={classes.navigation}>
        CL7
      </Link>
      <Link to="/present21" className={classes.navigation}>
        21
      </Link>
      <Link to="/present22" className={classes.navigation}>
        22.1
      </Link>
      <Link to="/present23" className={classes.navigation}>
        22.2
      </Link>
      <Link to="/present24" className={classes.navigation}>
        22.3
      </Link>
      <a
        href="https://www.pornhub.com/view_video.php?viewkey=ph5c2a3b9d96b9f"
        className={classes.navigation}
      >
        22.4
      </a>
    </div>
  </div>
);

export default injectSheet(styles)(Header);
