const Header: React.FC = () => {
  return (
    <header>
      <nav>
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
              Paramètres
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              À propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
