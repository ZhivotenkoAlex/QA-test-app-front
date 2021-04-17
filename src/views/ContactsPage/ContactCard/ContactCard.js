import { useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img } from 'react-image';
import Loader from '../../../components/Loader/Loader';
import s from './ContactCard.module.css';
import defaultImg from '../../../img/default-user.jpg';
import sprite from '../../../img/sprite.svg';

const ContactCard = ({ members }) => {
  const refToScroll = useRef();
  const history = useHistory();
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
      <div className={s.onePerson} ref={refToScroll}>
        <Img
          src={imgUrl ?? defaultImg}
          className={s.personPhoto}
          loader={<Loader />}
        />

        <div className={s.aboutOnePerson}>
          <p className={s.onePersonName}>{name}</p>
          <p className={s.onePersonPosition}>{title}</p>
          <p className={s.onePersonText} id="descr">
            {descr}
          </p>
          <button
            className={s.backBtn}
            onClick={() => {
              history.push('/contacts');
            }}
          ><svg className={s.backIcon}>
                  <use href={sprite + '#arrow-up'}></use>
                </svg></button>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;

ContactCard.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
};
