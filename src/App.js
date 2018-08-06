import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio-Fixed';
import Content from './components/Portfolio-Content';
import './css/styles.css';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
      <Portfolio />
      <Content />
      </div>
    );
  }
}

export default App;
