import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import sprite from '../../img/sprite.svg';
const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footerText}>
      <span className={styles.copyright}>©</span>&nbsp; 2021 | All rights
      Reserved | Developed with&nbsp;
      <svg className={styles.footerIcon} width="17" height="17">
        <use href={sprite + '#heart'}></use>
      </svg>
      &nbsp; by &nbsp;
      <Link to="/contacts" className={styles.footerContacts}>
        GoIT Students
      </Link>
    </span>
  </footer>
);
export default Footer;
