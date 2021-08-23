import React from 'react'
import Home from './pages'
import { Switch,Route } from 'react-router-dom';
import Header from './Components/Header';
import SingleCocktail from './Components/SingleCocktail';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cocktail/:id" component={SingleCocktail} />
      </Switch>
    
    </div>
  )
}

export default App;
