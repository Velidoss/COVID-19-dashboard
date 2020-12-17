import React, { useState, useEffect, useContext } from 'react';
import searchSvg from '../../../assets/svg/searchSvg.svg';
import style from './Search.module.scss';
import GlobalContext from '../../../store/GlobalContext';

const Search = () => {
  const [query, changeQuery] = useState('');
  const { state, getSearchResult } = useContext(GlobalContext);
  useEffect(() => {
    getSearchResult(query);
  }, [query]);
  console.log(state);
  return (
    <div className={style.search}>
      <input className={style.search__input} type="text" value={query} onChange={(event) => changeQuery(event.target.value)} />
      <img className={style.search__img} src={searchSvg} alt="search" />
      <div className={style.search__results}>
        {state.searchResult.map((result) => {
          const flagImg = result.countryInfo.flag;
          return (
            <div className={style.search__results_item} key={result.countryInfo._id}>
              <span className={style.search__results_item_text}>{result.country}</span>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img className={style.search__results_item_img} src={flagImg} alt="flag" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
