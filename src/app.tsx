import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/home/home";
import ContactsList from "./pages/contact/index/";
import ContactShow from "./pages/contact/show/show";
import Layout from "./components/layout/layout";
import ContactShowV2 from "./pages/contact/show/test-show";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contacts" component={ContactsList} />
          {/* <Route exact path="/contacts/:id" component={ContactShow} /> */}
          <Route exact path="/test-show/:id" component={ContactShowV2} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
