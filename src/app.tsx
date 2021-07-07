import { lazy, Suspense } from "react";
import {
  // BrowserRouter as Router,
  Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import { LoaderRounded } from "./components/shared/loading-rounded/loader-rounded";

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
    <Layout>
      <Suspense fallback={<LoaderRounded />}>
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contacts" component={ContactsList} />
          <Route exact path="/contacts/:id" component={ContactShow} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
