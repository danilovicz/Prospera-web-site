import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Header/Toolbar';
import Top_Content from './Components/Top_Content/Top_Content';
import Services from './Components/Services/Services';
//import Banner from './Components/Banner/Banner';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar />
        <Top_Content />
        <Services />

      </div>
    );
  }
}

export default App;
