import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-item nav-brand">
          <li>
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
        </ul>
        <ul className="nav-item nav-links">
          <li>
            <a className="nav-link" href="#">
              Contacts
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              Créer contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
