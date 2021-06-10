import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/home/home";
import ContactsList from "./pages/contact/index/";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/" component={Homepage} />
        <Route path="/contacts" component={ContactsList} />
      </Switch>
    </Router>
  );
};

export default App;
