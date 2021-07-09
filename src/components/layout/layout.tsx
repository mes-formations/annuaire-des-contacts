import Header from "./header/header";
import Footer from "./footer/footer";
import "./style.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
