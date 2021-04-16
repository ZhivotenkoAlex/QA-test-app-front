import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';

import { useLocation } from 'react-router-dom';
import { googleRegister } from '../../redux/authorization/authorization-operations';
const GoogleRedirect = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const tokens = queryString.parse(location.search);
  dispatch(googleRegister(tokens));
  return <Loader />;
};
export default GoogleRedirect;
