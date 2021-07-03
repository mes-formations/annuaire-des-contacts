import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { loader } from "webpack";
import Layout from "./components/layout/layout";

const Homepage = lazy(() =>
  import(/* webpackChunkName: "home" */ "./pages/home/home")
);
const ContactsList = lazy(() =>
  import(/* webpackChunkName: "contacts-list" */ "./pages/contact/index/")
);
const ContactShow = lazy(() =>
  import(/* webpackChunkName: "contact-details" */ "./pages/contact/show/show")
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Layout>
          <Switch>
            <Route exact path="/home">
              <Redirect to="/" />
            </Route>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/contacts" component={ContactsList} />
            <Route exact path="/contacts/:id" component={ContactShow} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
