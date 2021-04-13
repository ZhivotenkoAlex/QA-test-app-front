import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';

import { useLocation } from 'react-router-dom';
import { googleRegister } from '../../redux/authorization/authorization-operations';
const GoogleRedirect = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = queryString.parse(location.search);
  dispatch(googleRegister(token));
  return <Loader />;
};
export default GoogleRedirect;
