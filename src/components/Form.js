import React from 'react';

const Form = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <input type="text" placeholder="Book title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
