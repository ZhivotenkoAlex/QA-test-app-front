import  React from 'react';
import styles from './UsefullInfoItemLiter.module.css'

function UsefullInfoItemLiter({ name }) { 
    return (
        <>
         <p className={styles.text}>{name}</p> 
        </>
      );
   }   
 export default UsefullInfoItemLiter