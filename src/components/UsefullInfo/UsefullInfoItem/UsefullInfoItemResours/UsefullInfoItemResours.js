import  React from 'react';
import styles from './UsefullInfoItemResours.module.css'

function UsefullInfoItemResours({ name, url }) { 
    return (
        <>
         <a className={styles.text} href={url}>{name}</a> 
        </>
      );
   }   
 export default UsefullInfoItemResours