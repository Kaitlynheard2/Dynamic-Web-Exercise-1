import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Article from "./container/Article"
import ArticleListing from "./container/ArticleListing"


function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/article">
          <Article />
          </Route>
        <Route path="/">
        <ArticleListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
