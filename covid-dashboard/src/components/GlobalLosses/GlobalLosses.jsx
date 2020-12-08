import React from 'react';
import style from './GlobalLosses.module.scss';

const GlobalLosses = () => {
  return (
    <div className={style.losses}>
      <div className={style.losses__stat}>
        <span className={style.losses__stat_name}>Global deaths:</span>
        <span className={style.losses__stat_number}>1235462</span>
      </div>
      <div className={style.losses__list}>
        <div className={style.losses__list_item}>
          <span className={style.losses__list_item_name}>Canada</span>
          <span className={style.losses__list_item_number}>37239 deaths</span>
        </div>
        <div className={style.losses__list_item}>
          <span className={style.losses__list_item_name}>Canada</span>
          <span className={style.losses__list_item_number}>37239 deaths</span>
        </div>
        <div className={style.losses__list_item}>
          <span className={style.losses__list_item_name}>Canada</span>
          <span className={style.losses__list_item_number}>37239 deaths</span>
        </div>
        <div className={style.losses__list_item}>
          <span className={style.losses__list_item_name}>Canada</span>
          <span className={style.losses__list_item_number}>37239 deaths</span>
        </div>
        <div className={style.losses__list_item}>
          <span className={style.losses__list_item_name}>Canada</span>
          <span className={style.losses__list_item_number}>37239 deaths</span>
        </div>
      </div>
    </div>
  )
}

export default GlobalLosses;
