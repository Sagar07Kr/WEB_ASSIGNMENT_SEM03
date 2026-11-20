import { useState } from "react";
import BookCard from "../components/BookCard";

function Books({ books, onIssue, onReturn }) {
  const [genre, setGenre] = useState("All");

  const filteredBooks = books.filter((book) => {
    if (genre === "All") {
      return true;
    }

    return book.genre === genre;
  });

  return (
    <div className="container">

      <h1>All Books</h1>

      <div className="filter">

        <label>Filter by Genre: </label>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Biography">Biography</option>
          <option value="Fiction">Fiction</option>
          <option value="Technology">Technology</option>
          <option value="Self-Help">Self-Help</option>
        </select>

      </div>

      <div className="book-list">

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onIssue={onIssue}
              onReturn={onReturn}
            />
          ))
        ) : (
          <p>No books found.</p>
        )}

      </div>

    </div>
  );
}

export default Books;