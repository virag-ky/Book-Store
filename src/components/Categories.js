import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const checkForStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={checkForStatus}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
