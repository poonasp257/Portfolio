import React, { Component } from 'react';
import './App.css';
import BurgerMenu from './Menu';

class App extends Component {
  render() {
    const styles = {
      main: {
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        height: '100vh',
      }
    }
    
    return (
      <div style={styles.main}>
        <BurgerMenu />
      </div>
    )
  }
}

export default App;