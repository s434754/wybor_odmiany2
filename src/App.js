import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {Button} from "./components/Button"
import druga from "./druga.js";
import { Link } from "react-router-dom";
import Form from './Form';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home.js";
import trzecia from "./trzecia.js";
import czwarta from "./czwarta.js";
import piata from "./piata.js";
import szusta from "./szusta.js";
import pierwsza from "./pierwsza.js";
import siodma from "./siodma.js";
import osma from "./osma.js";
import dziewiata from "./dziewiata.js";
import dziesiata from "./dziesiata.js";






function App() {
  return (
    
    <Router>
    
      <div className="App"> 
      
      <Navbar />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pierwsza" component={pierwsza} />
          <Route path="/druga" component={druga} />
          <Route path="/trzecia" component={trzecia} />
          <Route path="/czwarta" component={czwarta} />
          <Route path="/piata" component={piata} />
          <Route path="/szusta" component={szusta} />
          <Route path="/siodma" component={siodma} />
          <Route path="/osma" component={osma} />
          <Route path="/dziewiata" component={dziewiata} />
          <Route path="/dziesiata" component={dziesiata} />
          
          

        </Switch>
        
        
      
      </div>
      
    </Router>
  );
}

export default App;
