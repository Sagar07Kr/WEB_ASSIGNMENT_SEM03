import BookCard from "../components/BookCard";

function Issued({ books, onIssue, onReturn }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <div className="container">

      <h1>Issued Books</h1>

      {issuedBooks.length > 0 ? (

        <div className="book-list">

          {issuedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onIssue={onIssue}
              onReturn={onReturn}
            />
          ))}

        </div>

      ) : (
        <h3>No books issued yet</h3>
      )}

    </div>
  );
}

export default Issued;