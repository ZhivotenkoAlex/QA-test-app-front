import React from 'react';
import styles from './UsefullInfo.module.css';
import UsefullInfoItemResours from './UsefullInfoItem/UsefullInfoItemResours/UsefullInfoItemResours';
import UsefullInfoItemLiter from './UsefullInfoItem/UsefulInfoItemLiter/UsefullItemLiter';

import { books, resources } from './usefullMaterials.json';

function UsefullInfo() {
  return (
    <section className={styles.materials}>
      <h2 className={styles.materialsTitle}>Usefull literature</h2>
      <hr className={styles.materialsLine} />
      <ol className={styles.literature}>
        {books.map(({ id, name }) => (
          <li className={styles.item} key={id}>
            <UsefullInfoItemLiter id={id} name={name} />
          </li>
        ))}
      </ol>
      <h2 className={styles.materialsTitle}>Usefull resources</h2>
      <hr className={styles.materialsLine} />
      <ol className={styles.materialsList}>
        {resources.map(({ id, name, url }) => (
          <li className={styles.item} key={id}>
            <UsefullInfoItemResours id={id} name={name} url={url} />
          </li>
        ))}
      </ol>
    </section>
  );
}
export default UsefullInfo;
