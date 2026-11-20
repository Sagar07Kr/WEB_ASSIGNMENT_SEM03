import { Link } from "react-router";

function Home({ books }) {
  const totalBooks = books.length;

  const issuedBooks = books.filter((book) => book.isIssued).length;

  const notAvailableBooks = books.filter(
    (book) => book.availableCopies === 0
  ).length;

  return (
    <div className="container">

      <h1>Welcome to Library Book Manager</h1>

      <p>
        Manage your library books easily. You can issue books,
        return books and check book details.
      </p>

      <div className="summary">

        <div className="summary-card">
          <h2>{totalBooks}</h2>
          <p>Total Books</p>
        </div>

        <div className="summary-card">
          <h2>{issuedBooks}</h2>
          <p>Issued Books</p>
        </div>

        <div className="summary-card">
          <h2>{notAvailableBooks}</h2>
          <p>Not Available Books</p>
        </div>

      </div>

      <Link to="/books" className="main-link">
        Explore Books
      </Link>

    </div>
  );
}

export default Home;