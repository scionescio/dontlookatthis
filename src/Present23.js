import React from "react";
import pic from "./image/hp.png";
import styles from "./styles";
import injectSheet from "react-jss";
import Header from "./Header";

const App = ({ classes }) => (
  <div className={classes.background}>
    <Header />
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="hp" />
      <div>
        <p>
          Ebenso kulutrell wertvoll ist die Harry Potter Ausstellung in Potsdam.
        </p>
        <p>
          Mit Vertrauen in unsere Gruppenmitglieder würde ich vorschlagen, dass
          wir da nächsten Donnerstag als Vorlauf für die nächste Aram-Session
          hinfahren.
        </p>
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
