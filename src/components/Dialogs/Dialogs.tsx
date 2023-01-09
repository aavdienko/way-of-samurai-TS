import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'


export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to='/dialogs/1'>Alex</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/2'>Lera</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/3'>Schoko</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to='/dialogs/4'>Crosby</NavLink>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hi</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>I'm Corsby</div>
        <div className={styles.message}>Yo!</div>
      </div>
    </div>
)};
