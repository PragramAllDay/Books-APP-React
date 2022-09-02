import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import SingleBook from "./SingleBook";
import "./book.css";

const URL = "/books";

const fetchHandler = () => {
  return axiosInstance.get(URL);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.data.books));
    // console.log(books);
  }, []);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, index) => {
            return (
              <li key={index}>
                <SingleBook book={book} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
