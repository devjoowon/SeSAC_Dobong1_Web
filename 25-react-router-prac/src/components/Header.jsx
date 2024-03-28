import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/" className="menu-item">
          홈으로
        </Link>
        <Link to="/student/allie" className="menu-item">
          학생
        </Link>
        <Link to="/student/codingon" className="menu-item">
          코딩온
        </Link>
        <Link to="/student/new?name=jisoo" className="menu-item">
          query
        </Link>
      </div>
    </header>
  );
}
