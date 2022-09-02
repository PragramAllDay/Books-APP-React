import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Book/Books";
import AddBook from "./components/AddBook";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import SingleBook from "./components/Book/SingleBook";
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/books/:id" element={<SingleBook />} exact />
        </Routes>
      </main>
    </>
  );
};

export default App;
