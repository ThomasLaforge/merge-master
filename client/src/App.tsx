import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Collection from './pages/Collection'
import Store from "./pages/Store";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}