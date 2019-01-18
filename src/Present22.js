import React from "react";
import pic from "./image/africaculture.png";
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
          Durch deine Eltern haben wir endlich mal wieder etwas Kulturprogramm
          gehabt, was wir jetzt nicht sofort wieder droppen sollten.
        </p>
        <p>
          Um deinem positiv-rassistischen Verlangen gegenüber der afrikanischen
          Kultur gerecht zu werden, würde ich gerne mit dir in die fancy
          Ausstellung:
        </p>
        <p>
          <b>"Beyond Compare: Art from Africa" gehen.</b>
        </p>
      </div>
    </article>
  </div>
);

export default injectSheet(styles)(App);
