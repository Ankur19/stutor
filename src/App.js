import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"; 
import Landing from "./components/Landing/Landing";
import Selection from "./components/Selection/Selection";


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={Landing}/>
      <Route path="/selection/:id" component={Selection}/>
    </Router>
  );
}

export default App;
