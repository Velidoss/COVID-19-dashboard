import React, { useState, useEffect } from 'react';
import searchSvg from '../../../assets/svg/searchSvg.svg';
import style from './Search.module.scss';

const Search = () => {
  const [query, changeQuery] = useState('');
  useEffect(() => {

  });
  return (
    <div className={style.search}>
      <input className={style.search__input} type="text" value={query} onChange={(event) => changeQuery(event.target.value)} />
      <img className={style.search__img} src={searchSvg} alt="search" />
    </div>
  );
};

export default Search;
