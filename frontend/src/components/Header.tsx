import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"><Link to="/">NewsHub</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/politics">Politics</Link></li>
          <li><Link to="/category/technology">Technology</Link></li>
          <li><Link to="/category/business">Business</Link></li>
          <li><Link to="/category/sports">Sports</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
