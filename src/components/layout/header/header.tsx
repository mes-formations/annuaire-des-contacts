import { Link } from "react-router-dom";
import { PAGES } from "../../../configs/pages";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-item nav-brand">
          <li>
            <Link to={PAGES.ROOT} className="nav-link" href="#">
              Accueil
            </Link>
          </li>
        </ul>
        <ul className="nav-item nav-links">
          <li>
            <Link to={PAGES.CONTACTS_LIST} className="nav-link" href="#">
              Contacts
            </Link>
          </li>
          <li>
            <Link to={PAGES.CREATE_CONTACT_FORM} className="nav-link" href="#">
              Créer contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
