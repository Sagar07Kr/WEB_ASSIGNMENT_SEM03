# Library Book Manager

A simple library management application developed using React. This application helps users explore books, check their availability, issue books, and return previously issued books.

---

## 01. Student Details

**Submitted By:** Sagar Kumar

**Roll Number:** 2502201530070

**Problem Statement:** P0 – Library Book Manager

---

## 02. Project Overview

The Library Book Manager is a frontend application designed to manage basic library operations.

It provides a simple interface where users can browse the available book collection, view detailed information about books, and manage book issuing and returning activities.

The application maintains book information locally and updates the interface whenever an issue or return operation is performed.

---

## 03. Modules of the Application

### A. Home Page

The home page provides an overview of the library.

It displays:
- Total number of books.
- Number of issued books.
- Number of books that are not available.

### B. Book Collection

This section displays the complete collection of books.

Users can:
- View book titles and authors.
- Check book genres.
- Check the number of available copies.
- Filter books according to their genre.

### C. Book Information

The details page displays complete information about an individual book, including:

- Book title
- Author name
- Genre
- Published year
- Number of pages
- Total copies
- Available copies

### D. Issued Books

This section displays all currently issued books.

Users can also return books directly from this section.

When no books are issued, the application displays an appropriate message.

---

## 04. Book Management Rules

The application follows these basic rules:

| Operation | Action |
|---|---|
| Issue Book | Changes `isIssued` to `true` |
| Return Book | Changes `isIssued` to `false` |
| Issue Book | Decreases available copies by 1 |
| Return Book | Increases available copies by 1 |
| No Available Copies | Displays Not Available |
| Available Copies | Displays Available |

A book cannot be issued when its available copies are zero.

---

## 05. Book Categories

The application supports the following genre filters:

- Biography
- Fiction
- Technology
- Self-Help
- All Books

Users can select a genre from the dropdown menu to view books belonging to that category.

---

## 06. Technology Stack

| Tool / Technology | Implementation |
|---|---|
| React.js | Component-based application |
| Vite | Development environment |
| JavaScript | Book management functionality |
| React Router | Navigation and dynamic routes |
| HTML5 | Page structure |
| CSS3 | User interface styling |

---

## 07. Folder Organization

The project follows a simple component-based folder structure.

```text
src/
│
├── data/
│   └── books.js
│
├── components/
│   ├── Navbar.jsx
│   └── BookCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Books.jsx
│   ├── BookDetails.jsx
│   └── Issued.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### File Responsibilities

| File | Responsibility |
|---|---|
| books.js | Stores the local book dataset |
| Navbar.jsx | Displays navigation links and issued-book count |
| BookCard.jsx | Displays individual book information and actions |
| Home.jsx | Displays library summary |
| Books.jsx | Displays and filters books |
| BookDetails.jsx | Displays complete book information |
| Issued.jsx | Displays issued books |
| App.jsx | Manages application state and routes |
| main.jsx | Starts the React application |
| index.css | Contains application styling |

---

## 08. Navigation Paths

The application contains four main routes.

| URL | Function |
|---|---|
| `/` | Library Home Page |
| `/books` | Complete Book Collection |
| `/books/:id` | Individual Book Details |
| `/issued` | Issued Books |

Dynamic routing is used to display the details of the selected book.

---

## 09. React Concepts Practised

This project demonstrates the following fundamental React concepts:

1. Functional Components
2. JSX
3. Props
4. useState Hook
5. Controlled Dropdown
6. Event Handling
7. map() for displaying book collections
8. filter() for selecting books
9. find() for locating a particular book
10. Conditional Rendering
11. React Router
12. Dynamic Routing
13. useParams()
14. Reusable Components

---

## 10. Dataset Information

The project uses a predefined local dataset available in:

`src/data/books.js`

Each book contains the following properties:

| Property | Description |
|---|---|
| id | Unique book identification |
| title | Name of the book |
| author | Book author's name |
| genre | Category of the book |
| year | Publication year |
| pages | Total number of pages |
| totalCopies | Total copies in the library |
| availableCopies | Copies currently available |
| isIssued | Indicates whether the book is issued |

No external API or database is used.

---

## 11. Installation and Execution

Follow these steps to execute the project on your local system.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Step 2: Navigate to the Project Directory

```bash
cd YOUR_PROJECT_FOLDER
```

### Step 3: Install Required Packages

```bash
npm install
```

### Step 4: Install React Router

```bash
npm install react-router
```

### Step 5: Run the Application

```bash
npm run dev
```

### Step 6: Open the Application

Visit the local URL displayed in your terminal.

Usually:

```text
http://localhost:5173
```

---

## 12. Application Behaviour

- Book information is loaded from the local dataset.
- The main application state is maintained inside `App.jsx`.
- Issuing and returning books updates the React state.
- Updated information is reflected across the pages.
- Navigation between pages does not reset the current state.
- Refreshing the browser restores the original dataset.

---

## 13. Project Outcome

Through this project, the basic working of a library management system is demonstrated using React.

It provides practical experience in managing application state, passing data through props, handling user actions, displaying dynamic information, and navigating between different pages.

---

## 14. Final Note

This project is developed as part of the WEB 301 – Advance Frontend Engineering practical assignment.

**Problem Statement: P0 – Library Book Manager**

---