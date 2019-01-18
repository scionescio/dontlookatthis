import React from "react";
import pic from "./image/badassbitches.JPG";
import styles from "./styles";
import injectSheet from "react-jss";
import Header from "./Header";

const App = ({ classes }) => (
  <div className={classes.background}>
    <Header />
    <article className={classes.form}>
      <img className={classes.image} src={pic} alt="Wiki" />
      <div>
        <p> Lieber Christopher Jakob Lotz,</p>
        <p>
          zu deinem Geburtstag wünsche ich dir nur das Allerliebste, Beste,
          einen stetig wachsenden Lat und ein nices Handstand- bzw. Saltogame.
        </p>
        <p>
          In alter Frontend-Manier habe ich meine sonst für immer unused'te
          Webtechseite genommen und in deine Geburtstags-Website verwandelt.
          Stell dir für ein wahres Multimedia-Erlebnis während deines Besuches
          dieser Seite vor, Yesterday oder A Mann für Amore würde im Hintergrund
          laufen.
          <p>Jetzt klick dich möglichst iterativ durch.</p>
        </p>
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
