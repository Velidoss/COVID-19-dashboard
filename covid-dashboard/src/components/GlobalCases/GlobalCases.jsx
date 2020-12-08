import React from 'react';
import style from './GlobalCases.module.scss';

const GlobalCases = () => {
  return (
    <div className={style.GlobalCases}>
      <p className={style.GlobalCases__text}>Global cases</p>
      <p className={style.GlobalCases__number}>3564345</p>
    </div>
  )
}

export default GlobalCases
