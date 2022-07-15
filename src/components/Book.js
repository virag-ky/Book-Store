import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBookFromList } from '../redux/books/books';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} />;
  /* eslint-enable */
}

export function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(75);
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBookFromList(id));
  };

  return (
    <li id={id} className="book" style={{ border: 'solid black' }}>
      {category === '' ? <h3>Category</h3> : <h3>{category}</h3>}
      {title === '' ? <h2>Title</h2> : <h2>{title}</h2>}
      {author === '' ? <h3>Author</h3> : <h3>{author}</h3>}
      <div className="buttonsDiv">
        <button type="button">Comments</button>
        <button id={id} type="button" onClick={() => deleteBook(id)}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
      <div className="progressContainer">
        <CircularStatic />
      </div>
    </li>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
