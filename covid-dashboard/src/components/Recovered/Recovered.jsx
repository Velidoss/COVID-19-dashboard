import React from 'react';
import style from './Recovered.module.scss';

const Recovered = () => (
  <div className={style.recovered}>
    <div className={style.recovered__title}>
      <span className={style.recovered__title_top}>US state level</span>
      <span className={style.recovered__title_bot}>Deaths, recovered</span>
    </div>
    <div className={style.recovered__list}>
      <div className={style.recovered__list_item}>
        <span className={style.recovered__list_item_loss}>2222 died</span>
        <span className={style.recovered__list_item_recovered}>3345 recovered</span>
        <span className={style.recovered__list_item_city}>Toronto</span>
      </div>
      <div className={style.recovered__list_item}>
        <span className={style.recovered__list_item_loss}>2222 died</span>
        <span className={style.recovered__list_item_recovered}>3345 recovered</span>
        <span className={style.recovered__list_item_city}>Toronto</span>
      </div>
      <div className={style.recovered__list_item}>
        <span className={style.recovered__list_item_loss}>2222 died</span>
        <span className={style.recovered__list_item_recovered}>3345 recovered</span>
        <span className={style.recovered__list_item_city}>Toronto</span>
      </div>
      <div className={style.recovered__list_item}>
        <span className={style.recovered__list_item_loss}>2222 died</span>
        <span className={style.recovered__list_item_recovered}>3345 recovered</span>
        <span className={style.recovered__list_item_city}>Toronto</span>
      </div>
      <div className={style.recovered__list_item}>
        <span className={style.recovered__list_item_loss}>2222 died</span>
        <span className={style.recovered__list_item_recovered}>3345 recovered</span>
        <span className={style.recovered__list_item_city}>Toronto</span>
      </div>
    </div>
  </div>
);

export default Recovered;
