import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";
import { LoaderRounded } from "./components/shared/loading-rounded/loader-rounded";
import { PAGES } from "./configs/pages";

const Homepage = lazy(() =>
  import(/* webpackChunkName: "home" */ "./pages/home/home")
);
const ContactsList = lazy(() =>
  import(/* webpackChunkName: "contacts-list" */ "./pages/contact/index/")
);
const ContactShow = lazy(() =>
  import(/* webpackChunkName: "contact-details" */ "./pages/contact/show/show")
);

const ContactCreate = lazy(() =>
  import(
    /* webpackChunkName: "contact-create" */ "./pages/contact/create/create"
  )
);

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<LoaderRounded />}>
        <Switch>
          <Route exact path={PAGES.HOME}>
            <Redirect to={PAGES.ROOT} />
          </Route>
          <Route exact path={PAGES.ROOT} component={Homepage} />
          <Route exact path={PAGES.CONTACTS_LIST} component={ContactsList} />
          <Route
            exact
            path={PAGES.CREATE_CONTACT_FORM}
            component={ContactCreate}
          />
          <Route exact path={PAGES.CONTACT_DETAILS} component={ContactShow} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
