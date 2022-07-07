import React from "react";
import Form from "./Form";
import Book from "./Book";

const BooksContainer = () => {
  return (
    <div className="container">
      <Book />
      <Form />
    </div>
  );
};

export default BooksContainer;
