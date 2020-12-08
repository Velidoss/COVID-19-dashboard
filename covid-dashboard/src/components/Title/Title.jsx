import React from 'react';
import style from './Title.module.scss'


const Title = () => {
  return (
    <div className={style.title}>
        <span className={style.titleText}>Covid dashboard</span>
    </div>
  )
}

export default Title;
