import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const test = useSelector<any>((state) => state); //Il fera abstraction getState,et les autres
  console.log("Test : ", test);
  return (
    <h1>
      Welcome to the homepage,so see the contacts list clic{" "}
      <Link to="/contacts">here</Link>
    </h1>
  );
};

export default Home;
