import { Link } from "react-router";

function BookCard({ book, onIssue, onReturn }) {
  return (
    <div className="book-card">

      <h3>{book.title}</h3>

      <p><b>Author:</b> {book.author}</p>

      <p><b>Genre:</b> {book.genre}</p>

      <p><b>Available Copies:</b> {book.availableCopies}</p>

      <p>
        <b>Status:</b>{" "}
        {book.availableCopies > 0 ? "Available" : "Not Available"}
      </p>

      <Link to={`/books/${book.id}`} className="details-link">
        View Details
      </Link>

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

    </div>
  );
}

export default BookCard;