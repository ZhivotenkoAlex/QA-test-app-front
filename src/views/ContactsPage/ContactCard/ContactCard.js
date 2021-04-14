import { Suspense, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ContactCard.module.css';
import defaultImg from '../../../img/default-user.jpg';

const ContactCard = ({ members }) => {
  const refToScroll = useRef();
  const scrollToHashRef = () =>
    refToScroll.current?.scrollIntoView({ behavior: 'smooth' });

  const { memberId } = useParams();
  const { imgUrl, title, name, descr } = members.find(
    member => member.id === Number.parseInt(memberId),
  );
  useEffect(() => {
    setTimeout(scrollToHashRef, 200);
  });
  return (
    <div className={`${s.onePersonContainer} ${s.container}`}>
      <hr className={s.personLine} />
      <div className={s.onePerson}>
        <Suspense
          fallback={
            <img src={defaultImg} alt={name} className={s.onePersonPhoto} />
          }
        >
          <img
            src={imgUrl ?? defaultImg}
            alt={name}
            className={s.onePersonPhoto}
          />
        </Suspense>

        <div className={s.aboutOnePerson} ref={refToScroll}>
          <p className={s.onePersonName}>{name}</p>
          <p className={s.onePersonPosition}>{title}</p>
          <p className={s.onePersonText} id="descr">
            {descr}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;

ContactCard.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
};
