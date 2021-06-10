import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/home/home";
import ContactsList from "./pages/contact/index/";
import ContactShow from "./pages/contact/show/show";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contacts" component={ContactsList} />
        <Route exact path="/contacts/:id" component={ContactShow} />
      </Switch>
    </Router>
  );
};

export default App;
