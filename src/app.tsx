import { lazy, Suspense } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import { ConnectedRouter } from "connected-react-router";
import { LoaderRounded } from "./components/shared/loading-rounded/loader-rounded";
import { history } from "./state/store";

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
    <ConnectedRouter history={history}>
      <Suspense fallback={<LoaderRounded />}>
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
    </ConnectedRouter>
  );
};

export default App;
