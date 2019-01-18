import React from "react";
import pic from "./image/cuteshit.JPG";
import styles from "./styles";
import injectSheet from "react-jss";
import Header from "./Header";

const App = ({ classes }) => (
  <div className={classes.background}>
    <Header />
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="hp" />
      <div>
        <p>Okay, Chrissi.</p>
        <p>
          I'll start missing you with this gay shit again now und wünsche dir
          zusätzlich noch weiterhin so gute Uni-Leistungen, dass du dich nicht
          verletzt und du weiter so im Aram carryn kannst und du ein
          kulturell-wertvolles und auch sonst aufregendes Jahr verbringst.
        </p>
        <p>
          PS: Bei 22.4 wartet noch eine kleine Überraschung zum Schluss auf
          dich.
        </p>
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
