import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;

// Леша потом обернет в App этим компонентов все остальные