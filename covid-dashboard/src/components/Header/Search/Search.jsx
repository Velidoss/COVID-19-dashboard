import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import searchSvg from '../../../assets/svg/searchSvg.svg';
import style from './Search.module.scss';
import GlobalContext from '../../../store/GlobalContext';
import useClickOutside from '../../../customHooks/useClickOutside';
import SearchCountry from './SearchCountry';

const Search = () => {
  const [open, toggleOpen] = useState(false);
  const [query, changeQuery] = useState('');
  const {
    state,
    getSearchResult,
    setCountryToObserve,
    unsetCountryToObserve,
  } = useContext(GlobalContext);
  const searchRef = useRef();

  useClickOutside(searchRef, () => toggleOpen(false));
  useEffect(() => {
    getSearchResult(query);
  }, [query]);
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div ref={searchRef} className={style.search} onClick={() => toggleOpen(true)}>
      <input className={style.search__input} type="text" value={query} onChange={(event) => changeQuery(event.target.value)} />
      <img className={style.search__img} src={searchSvg} alt="search" />
      {
        open
          ? (
            <div className={style.search__results}>
              {state.searchResult.map((country) => {
                const flagImg = country.countryInfo.flag;
                return (
                  <SearchCountry
                    country={country}
                    setCountryToObserve={setCountryToObserve}
                    unsetCountryToObserve={unsetCountryToObserve}
                    selectedCountryId={state.selectedCountryId}
                    key={country.countryInfo._id}
                    flagImg={flagImg}
                  />
                );
              })}
            </div>
          )
          : null
      }
    </div>
  );
};

export default Search;
