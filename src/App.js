import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"; 
import Landing from "./components/Landing/Landing";


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact render={(props)=><Landing {...props}/>}/>
    </Router>
  );
}

export default App;
