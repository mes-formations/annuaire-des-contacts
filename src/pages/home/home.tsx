import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <h1>
      Welcome to the homepage,so see the contacts list clic{" "}
      <Link to="/contacts">here</Link>
    </h1>
  );
};

export default Home;
