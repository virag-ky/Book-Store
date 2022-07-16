import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBookFromList } from '../redux/books/books';
import '../styles/book.css';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} size={"80px"} />;
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
    <li id={id} className="book">
      <div className="bookInfo">
        <div>
          {category === '' ? (
            <h3 className="category">Category</h3>
          ) : (
            <h3 className="category">{category}</h3>
          )}
          {title === '' ? (
            <h2 className="title">Title</h2>
          ) : (
            <h2 className="title">{title}</h2>
          )}
          {author === '' ? (
            <h3 className="author">Author</h3>
          ) : (
            <h3 className="author">{author}</h3>
          )}
        </div>
        <div className="buttonsDiv">
          <button type="button" className="bookButtons">
            Comments
          </button>
          <div className="divider" />
          <button
            id={id}
            type="button"
            className="bookButtons"
            onClick={() => deleteBook(id)}
          >
            Remove
          </button>
          <div className="divider" />
          <button type="button" className="bookButtons">
            Edit
          </button>
        </div>
      </div>
      <div className="bookStats">
        <div className="progressContainer">
          <CircularStatic />
          <div className="completedProgress">
            <h2 className="percentage">
              {Math.floor(Math.random() * 101)}
              %
            </h2>
            <span>Completed</span>
          </div>
        </div>
        <div className="bookDivider" />
        <div className="chaptersContainer">
          <h3 className="currentChapter">CURRENT CHAPTER</h3>
          <h3 className="chapter">
            Chapter
            {Math.floor(Math.random() * 101)}
          </h3>
          <button type="button" className="updateProgress">
            UPDATE PROGRESS
          </button>
        </div>
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
