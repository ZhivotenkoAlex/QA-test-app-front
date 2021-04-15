import { Suspense } from 'react';
import { Img } from 'react-image';
import Loader from '../../components/Loader/Loader';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';
import s from './ContactsPage.module.css';
import ContactCard from './ContactCard';
import defaultImg from '../../img/default-user.jpg';
import { members } from './participants.json';
const ContactsPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  window.scroll(0, 0);
  return (
    <section className={`${s.team} ${s.container}`}>
      <h4 className={s.teamTitle}>Our team</h4>
      <hr className={s.teamLine} />
      <ul className={s.teamList}>
        {members.map(({ id, name, imgUrl }) => (
          <li key={id} className={s.teamItem}>
            <Img
              src={imgUrl ?? defaultImg}
              className={s.personPhoto}
              loader={<Loader />}
            />
            <div className={s.aboutPerson}>
              <p className={s.personName}>{name}</p>
              <button
                className={s.infoBtn}
                onClick={() => {
                  history.push(`${path}/${id}`);
                }}
              >
                More information
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Suspense fallback={<Loader />}>
        <Route path={`${path}/:memberId`}>
          <ContactCard members={members} />
        </Route>
      </Suspense>
    </section>
  );
};
export default ContactsPage;
