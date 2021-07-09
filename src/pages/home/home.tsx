import { Link } from "react-router-dom";
import { PAGES } from "../../configs/pages";

const Home: React.FC = () => {
  return (
    <h1>
      Welcome to the homepage,so see the contacts list clic{" "}
      <Link to={PAGES.CONTACTS_LIST}>here</Link>
    </h1>
  );
};

export default Home;
