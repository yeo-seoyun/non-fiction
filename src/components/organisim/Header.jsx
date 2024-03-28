import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pink-100 w-full h-[117px]">
      <nav>
        <Link to="/bestseller" aria-label="º£½ºÆ®¼¿·¯"></Link>
      </nav>
    </header>
  );
}

export default Header;
