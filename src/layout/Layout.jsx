import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="logo">
          LOGO
        </Link>
        <ul className="nav_link_container">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      {children}
      <footer className="footer">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
