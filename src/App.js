import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Containers/Home/home';
import About from './Containers/About/about';
import './App.css';

function App() {
  return (
    <div className="App">
    























  {/* All routes used to navigate to different pages in the website */}
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path='/about' component={About} />
    </Switch>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
