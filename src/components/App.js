import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import MealsList from './MealsList';
import SearchMeals from './SearchMeals';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={MealsList} />
        <Route path="/search/:term" exact component={SearchMeals} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
