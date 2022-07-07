import React from "react";

const Form = () => {
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
