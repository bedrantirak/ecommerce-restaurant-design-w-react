import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
    <Hero />
    </Router>
  );
}

export default App;
