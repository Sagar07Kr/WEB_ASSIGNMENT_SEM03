import { Link } from "react-router";

function Navbar({ books }) {
  const issuedCount = books.filter((book) => book.isIssued).length;

  return (
    <nav className="navbar">
      <h2>Library Manager</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">All Books</Link>
        <Link to="/issued">Issued Books ({issuedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;