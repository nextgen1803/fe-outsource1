import React from 'react';
import './App.css';
import HomePage from "./page/homePage";
import {BrowserRouter as Switch, Route} from 'react-router-dom';

function App() {
    return (
      <main>
        <Switch>
          <Route path="/" exact><HomePage/></Route>
        </Switch>
      </main>
    );
}

export default App;
