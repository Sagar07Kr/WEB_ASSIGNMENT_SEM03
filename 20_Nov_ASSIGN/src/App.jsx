import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router";

import booksData from "./data/books";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Issued from "./pages/IssuedBooks";

function App() {
  const [books, setBooks] = useState(booksData);

  function issueBook(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id && book.availableCopies > 0) {
        return {
          ...book,
          isIssued: true,
          availableCopies: book.availableCopies - 1
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  function returnBook(id) {
    const updatedBooks = books.map((book) => {
      if (book.id === id && book.isIssued === true) {
        return {
          ...book,
          isIssued: false,
          availableCopies: book.availableCopies + 1
        };
      }

      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <BrowserRouter>

      <Navbar books={books} />

      <Routes>

        <Route
          path="/"
          element={<Home books={books} />}
        />

        <Route
          path="/books"
          element={
            <Books
              books={books}
              onIssue={issueBook}
              onReturn={returnBook}
            />
          }
        />

        <Route
          path="/books/:id"
          element={
            <BookDetails
              books={books}
              onIssue={issueBook}
              onReturn={returnBook}
            />
          }
        />

        <Route
          path="/issued"
          element={
            <Issued
              books={books}
              onIssue={issueBook}
              onReturn={returnBook}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;