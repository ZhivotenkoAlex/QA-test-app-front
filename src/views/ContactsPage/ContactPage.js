import { Suspense } from 'react';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import s from './ContactsPage.module.css';
import ContactCard from './ContactCard';
import { members } from './participants.json';
const ContactsPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  return (
    <section className={s.team}>
      <h4 className={s.teamTitle}>Our team</h4>
      <hr className={s.teamLine} />
      <ul className={s.teamList}>
        {members.map(({ id, name }) => (
          <li key={id} className={s.teamItem}>
            <span className={s.personName}>{name}</span>
            <button
              className={s.infoBtn}
              onClick={() => {
                history.push(`${path}/${id}`);
              }}
            >
              Info
            </button>
          </li>
        ))}
      </ul>
      <Suspense fallback={<p>Loader</p>}>
        <Route path={`${path}/:memberId`}>
          <ContactCard members={members} />
        </Route>
      </Suspense>
    </section>
  );
};
export default ContactsPage;
