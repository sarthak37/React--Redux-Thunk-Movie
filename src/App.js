import './App.scss';
import React from "react";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path = "/" exact  component={Home} />
          <Route path = "/movie/:imdbID" component={MovieDetail} />
          <Route component = {PageNotFound} />
        </Switch>
        <Footer />
      </Router>
      App
    </div>
  );
}

export default App;
