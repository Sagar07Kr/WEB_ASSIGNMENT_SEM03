import { useParams, Link } from "react-router";

function BookDetails({ books, onIssue, onReturn }) {
  const { id } = useParams();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="container">
        <h2>Book not found</h2>
        <Link to="/books">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="container">

      <div className="details-card">

        <h1>{book.title}</h1>

        <p><b>Author:</b> {book.author}</p>

        <p><b>Genre:</b> {book.genre}</p>

        <p><b>Published Year:</b> {book.year}</p>

        <p><b>Total Pages:</b> {book.pages}</p>

        <p><b>Total Copies:</b> {book.totalCopies}</p>

        <p><b>Available Copies:</b> {book.availableCopies}</p>

        <p>
          <b>Status:</b>{" "}
          {book.availableCopies > 0 ? "Available" : "Not Available"}
        </p>

        {book.isIssued ? (
          <button onClick={() => onReturn(book.id)}>
            Return Book
          </button>
        ) : book.availableCopies > 0 ? (
          <button onClick={() => onIssue(book.id)}>
            Issue Book
          </button>
        ) : (
          <p className="unavailable">Not Available</p>
        )}

        <br />

        <Link to="/books" className="details-link">
          Back to Books
        </Link>

      </div>

    </div>
  );
}

export default BookDetails;