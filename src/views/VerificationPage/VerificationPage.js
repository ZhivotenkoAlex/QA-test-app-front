import { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailVerifyResponse } from '../../redux/authorization/authorization-selectors';
import { emailVerification } from '../../redux/authorization/authorization-operations';
import Loader from '../../components/Loader/Loader';
import s from './VerificationPage.module.css';

const VerificationPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { verificationToken } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(emailVerification(verificationToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmailVerify = useSelector(getEmailVerifyResponse);
  return (
    <>
      {isEmailVerify ? (
        <p className={s.paragraf}> {isEmailVerify}</p>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default VerificationPage;
