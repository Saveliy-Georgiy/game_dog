import React from 'react';
import Game from './game/Game'
import styles from 'App.module.css'

class App extends React.Component {

  render = () => {

    return (
        <div className={styles.App}>
          <Game/>
        </div>
    );
  }
}

export default App;
