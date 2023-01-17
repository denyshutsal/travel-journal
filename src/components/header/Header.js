import Logo from "../logo/Logo";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="main-nav container">
        <Logo />
      </nav>
    </header>
  );
}

export default Header;
