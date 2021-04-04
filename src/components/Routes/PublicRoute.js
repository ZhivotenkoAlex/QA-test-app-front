import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/authorization/authorization-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
