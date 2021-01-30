import logo from './logo.svg';
import './App.css';
import Products from "./components/pages/Products"
import About from "./components/pages/About";
import Home from "./components/pages/Home"
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Links from './components/Links';
import Banner from './components/Banner';


function App() {
  return (
    <div >
     <Banner/>
      
    <Links/>
    <div className="container1">
      {/* <Router>
     <Switch>
     <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products} />   
      <Route  exact path="/about" component = {About}/>  
      </Switch>
      </Router> */}
    </div>
    </div>
  );
}

export default App;
