import React from "react";
import pic from "./image/ddf.png";
import styles from "./styles";
import injectSheet from "react-jss";
import Header from "./Header";

const App = ({ classes }) => (
  <div className={classes.background}>
    <Header />
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="ddf" />
      <div>
        <p>
          Leider haben wir immer noch offen, ein weiteres Mal zu DDF (weird as
          acronym) zu gehen.
        </p>
        <p>
          Bitte wähle unter den aufgeführten Daten eins aus, damit wir das
          endlich nachholen.
        </p>
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
