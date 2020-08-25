import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

// import components
import Nav from "./components/Nav";
import Provider from "./Context/Context";
import Movies from "./components/Movies";
import Form from "./components/Form";
import MovieDetails from "./components/MovieDetails";
// import react router
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Provider>
      <Nav />
      <div className="container">
        <Form />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Movies} exact />
            <Route path="/movies/:movieID" component={MovieDetails} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
